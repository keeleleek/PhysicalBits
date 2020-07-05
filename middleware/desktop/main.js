const { app, BrowserWindow } = require('electron')
const { spawn } = require('child_process');
const kill = require('tree-kill');
const fs = require('fs');
const path = require('path');
const log = require('electron-log');


log.transports.console.level = true;

if (!app.requestSingleInstanceLock()) { return app.quit(); }

//const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'config.json'), 'utf-8'));
log.info(config);
let win;

app.on('second-instance', (event, commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

let server;
if (config.startServer) {
  /*
  server = spawn(path.resolve(__dirname, 'jdk-12.0.1', 'bin', 'java'),
                  ['-jar', config.jar, '-w', config.web, '-u', config.uzi]);
  */
  if (process.platform === 'win32') {
    server = spawn('cmd.exe', ['/c', 'start.bat'], {
      cwd: app.getAppPath() + '/release'
    });
  } else {
    server = spawn(app.getAppPath() + '/release/start.sh');
  }
}

function killServer() {
  return new Promise((resolve, reject) => {
    if (server) {
      kill(server.pid, 'SIGTERM', function () {
         server = null;
         resolve();
      });
    } else {
      resolve();
    }
  });
}

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    show: false,
    autoHideMenuBar: true
  });

  win.on('closed', function () {
      win = null;
  });

  win.on('close', function (e) {
      if (server) {
          e.preventDefault();
          killServer().then(() => win.close());
      }
  });

  win.loadFile(config.index);
  win.maximize();

  if (config.devTools) {
    win.webContents.openDevTools();
  }
  win.show();
}

app.whenReady().then(createWindow);
