(ns middleware.core
  (:require [clojure.tools.logging :as log]
            [clojure.tools.cli :as cli]
            [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.java.browse :refer [browse-url]]
            [middleware.server.server :as server]
            [middleware.device.controller :as dc])
  (:gen-class))

(def project-name
  ; TODO(Richo): Figure out a way of reading this values from the project.clj
  (let [project-name "UziScript middleware"
        project-version "0.3.0-SNAPSHOT"]
    (format "%s (%s)" project-name project-version)))

(def cli-options
  [["-u" "--uzi PATH" "Uzi libraries folder (default: uzi)"
    :default "uzi"
    :validate [#(.exists (io/file %)) "The directory doesn't exist"]]
   ["-w" "--web PATH" "Web resources folder (default: web)"
    :default "web"
    :validate [#(.exists (io/file %)) "The directory doesn't exist"]]
   ["-s" "--server-port PORT" "Server port number"
    :default 3000
    :parse-fn #(Integer/parseInt %)
    :validate [#(< 0 % 0x10000) "Must be a number between 0 and 65536"]]
   ["-a" "--arduino-port PORT" "Arduino port name"
    :default nil]
   ["-o" "--open-browser" "Open browser flag"]
   ["-h" "--help"]])

(defn usage [options-summary]
  (->> [project-name
        ""
        "Options:"
        options-summary]
       (str/join \newline)))

(defn error-msg [errors]
  (str "The following errors occurred while parsing your command:\n\n"
       (str/join \newline errors)))

(defn exit [status msg]
  (log/info msg)
  (System/exit status))

(defn -main [& args]
  (let [{:keys [errors options summary]} (cli/parse-opts args cli-options)]
    (when errors
      (exit 1 (error-msg errors)))
    (when (:help options)
      (exit 0 (usage summary)))
    (let [{:keys [uzi web server-port arduino-port open-browser]} options]
      (log/info project-name)
      (log/info "Starting server...")
      (server/start :uzi-libraries uzi
                    :web-resources web
                    :server-port server-port)
      (log/info "Server started on port" server-port)
      (when open-browser
        (let [url (str "http://localhost:" server-port)]
          (log/info "Opening browser on" url)
          (browse-url url)))
      (println)
      (when arduino-port
        (dc/connect arduino-port)))))
