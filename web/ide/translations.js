
var TRANSLATIONS = [
    // spec
    ["en", "es", "et"],

    ["New...", "Nuevo...", "Uus..."],
    ["Open...", "Abrir...", "Ava..."],
    ["Save...", "Guardar...", "Salvesta..."],
    ["Automatic", "Automático", "Automaatne"],
    ["Other...", "Otro...", "Muu..."],
    ["Connect", "Conectar", "Ühenda"],
    ["Disconnect", "Desconectar", "Ühenda lahti"],
    ["Verify", "Verificar", "Kontrolli"],
    ["Run", "Ejecutar", "Jooksuta"],
    ["Install", "Instalar", "Paigalda"],
    ["Debug", "Depurar", "Silu"],
    ["Interactive mode", "Modo interactivo", "Interaktiivne"],
    ["Options...", "Opciones...", "Seaded..."],
    ["Pins", "Pines", "Viigud"],
    ["* no values reporting *", "* no hay datos *", "* väärtusi pole *"],
    ["Globals", "Variables globales", "Globaalsed muutujad"],
    ["Tasks", "Tareas", "Tööd"],
    ["ERROR: Broken layout", "ERROR: Diseño arruinado", "VIGA: Katkine asetus"],
    ["It seems you've broken the page layout.", "Parece que se rompió el diseño de la aplicación.", "Paistab, et sa oled asetuse lõhkunud."],
    ["But don't worry! Click the button below to restore it to its former glory.", "¡Pero no te preocupes! Hacé clic en el botón siguiente para restaurarlo.", "Aga ära pabista! Vajuta nupule, et taastada õige seis."],
    ["Restore default layout", "Restaurar diseño", "Taasta vaikimisi asetus"],
    ["ERROR: Server not found", "ERROR: Servidor no encontrado", "VIGA: Serverit ei leitud"],
    ["Please make sure the Physical BITS server is up and running.", "Por favor, asegurate de que el servidor de Physical BITS está ejecutándose.", "Palun tee kindlaks, et Physical BITS server on püsti."],
    ["Attempting to reconnect...", "Intentando volver a conectarse...", "Püüan uuesti ühenduda..."],
    ["Options", "Opciones", "Seaded"],
    ["User interface", "Interfaz de usuario", "Kasutajaliides"],
    ["Internationalization", "Internacionalización", "Keeled"],
    ["Panels:", "Paneles:", "Paanid:"],
    ["Inspector", "Inspector", "Inspektor"],
    ["Output", "Salida", "Väljund"],
    ["Blocks", "Bloques", "Klotsid"],
    ["Serial Monitor", "Monitor Serial", "Jadapordi monitor"],
    ["Code", "Código", "Kood"],
    ["Debugger", "Depurador", "Siluja"],
    ["Current language:", "Idioma actual:", "Keel:"],
    ["Choose pins", "Elegir pines", "Vali viigud"],
    ["Choose globals", "Elegir variables globales", "Vali globaalsed muutujad"],
    ["Configure motors", "Configurar motores", "Seadista mootorid"],
    ["Motor name", "Nombre del motor", "Mootori nimi"],
    ["Enable pin", "Pin Enable", "Ava viik"],
    ["Forward pin", "Pin Forward", "Ettepoole viik"],
    ["Backward pin", "Pin Backward", "Tahapoole viik"],
    ["Configure sonars", "Configurar sonares", "Seadista kajalood"],
    ["Sonar name", "Nombre del sonar", "Kajaloo nimi"],
    ["Trig pin", "Pin Trig", "Kõlari viik"],
    ["Echo pin", "Pin Echo", "Kaja (mikrofoni) viik"],
    ["Max distance (cm)", "Distancia máxima (cm)", "Pikim kaugus (cm)"],
    ["This variable is being used by the program!", "¡Esta variable está siendo usada en el programa!", "Hetkel kasutatakse seda muutujat programmis!"],
    ["This motor is being used by the program!", "¡Este motor está siendo usado en el programa!", "Hetkel kasutatakse seda mootorit programmis!"],
    ["This sonar is being used by the program!", "¡Este sonar está siendo usado en el programa!", "Hetkel kasutatakse seda kajaloodi programmis!"],

    // Server
    ["Program size (bytes): %1", "Tamaño del programa (en bytes): %1", "Program size (bytes): %1"],
    ["Compilation successful!", "¡Compilación exitosa!", "Compilation successful!"],
    ["Connecting on serial...", "Conectando por serie...", "Connecting on serial..."],
    ["Connecting on socket...", "Conectando por socket...", "Connecting on socket..."],
    ["Installed program successfully!", "¡Programa instalado correctamente!", "Installed program successfully!"],
    ["Opening port: %1", "Abriendo puerto: %1", "Opening port: %1"],
    ["Opening port failed!", "¡La apertura del puerto falló!", "Opening port failed!"],
    ["Connection lost!", "¡Conexión perdida!", "Connection lost!"],
    ["%1 detected. The program has been stopped.", "Se detectó %1. El programa ha sido detenido.", "%1 detected. The program has been stopped."],
    ["Free Arduino RAM: %1 bytes", "RAM de Arduino disponible: %1 bytes", "Free Arduino RAM: %1 bytes"],
    ["Free Uzi RAM: %1 bytes", "RAM de Uzi disponible: %1 bytes", "Free Uzi RAM: %1 bytes"],
    ["Uzi - Invalid response code: %1", "Uzi - Código de respuesta inválido: %1", "Uzi - Invalid response code: %1"],
    ["Connection timeout!", "¡Expiró el tiempo de espera de la conexión!", "Connection timeout!"],
    ['%1 detected on script "%2". The script has been stopped.', 'Se detectó %1 en el script "%2". El script ha sido detenido.', '%1 detected on script "%2". The script has been stopped.'],
    ["Requesting connection...", "Solicitando conexión...", "Requesting connection..."],
    ["Connection accepted!", "¡Conexión aceptada!", "Connection accepted!"],
    ["Connection rejected", "Conexión rechazada", "Connection rejected"],
    ["Connection timeout", "Expiró el tiempo de espera de la conexión", "Connection timeout"],

    // Blockly
    ["toggle pin", "alternar pin", "lülita viik ümber"],
    ["%1 pin %2", "%1 pin %2", "%1 viik %2"],
    ["wait", "esperar", "oota"],
    ["is %1 pin %2", "está %1 el pin %2", "on viik %1 %2"],
    ["read pin %1", "leer pin %1", "loe viiku %1"],
    ["write pin %1 value %2", "escribir en el pin %1 el valor %2", "määra viigu %1 väärtuseks %2"],
    ["repeat forever", "repetir por siempre", "korda igavesti"],
    ["elapsed %1", "%1 transcurridos", "kuni %1 on möödunud"],
    ["move servo on pin %1 degrees %2", "mover servo en pin %1 grados %2", "pööra servot viigus %1 %2 kraadini"],
    ["repeat", "repetir", "korda"],
    ["repeat %1 times %2", "repetir %1 veces %2", "korda %1 korda %2"],
    ["count with %1 from %2 to %3 by %4", "contar con %1 desde %2 hasta %3 por %4", "loenda muutujat %1 alates %2 kuni %3 sammuga %4"],
    ["timer named %1 running %2 times per %3 initial state %4 %5", "temporizador llamado %1 ejecutándose %2 veces por %3 estado inicial %4 %5", "kell nimega %1 tiksub %2 korda iga %3 algseisuga %4 %5"],
    ["task named %1 %2", "tarea llamada %1 %2", "ülesanne nimega %1 %2"],
    ["if %1 then %2", "si %1 entonces %2", "juhul kui kehtib %1 siis %2"],
    ["if %1 then %2 else %3", "si %1 entonces %2 si no %3", "juhul kui %1 siis %2 muidu %3"],
    ["stop", "detener", "peata"],
    ["start", "iniciar", "start"],
    ["resume", "continuar", "jätka"],
    ["pause", "pausar", "paus"],
    ["run", "ejecutar", "käivita"],
    ["turn on", "encender", "lülita sisse"],
    ["turn off", "apagar", "lülita välja"],
    ["on", "encendido", "sees"],
    ["off", "apagado", "väljas"],
    ["milliseconds", "milisegundos", "millisekundit"],
    ["seconds", "segundos", "sekundit"],
    ["minutes", "minutos", "minutit"],
    ["second", "segundo", "sekund"],
    ["minute", "minute", "minut"],
    ["hour", "hour", "tund"],
    ["started", "iniciado", "käivitatud"],
    ["stopped", "detenido", "peatatud"],
    ["move %1 %2 at speed %3", "mover %1 hacia %2 a velocidad %3", "liiguta mootorit %1 suunas %2 kiirusega %3"],
    ["set %1 speed to %2", "fijar velocidad de %1 a %2", "määra mootori %1 kiiruseks %2"],
    ["read distance from %1 in %2", "leer distancia de %1 en %2", "kaugus kajaloost %1 ühikutes %2"],
    ["forward", "adelante", "edasi"],
    ["backward", "atrás", "tagasi"],
    ["mm", "mm", "mm"],
    ["cm", "cm", "cm"],
    ["m", "m", "m"],
    ["while", "mientras que", "senikaua"],
    ["until", "hasta que", "kuni"],
    ["true", "verdadero", "tõene"],
    ["false", "falso", "väär"],
    ["and", "y", "ja"],
    ["or", "o", "või"],
    ["not", "no", "mitte"],
    ["is even", "es par", "on paarisarv"],
    ["is odd", "es impar", "on paaritu arv"],
    ["is prime", "es primo", "on algarv"],
    ["is whole", "es entero", "on täisarv"],
    ["is positive", "es positivo", "on positiivne"],
    ["is negative", "es negativo", "on negatiivne"],
    ["is divisible by", "es divisible por", "jaguneb arvuga"],
    ["Tasks", "Tareas", "Tööd"],
    ["GPIO", "GPIO", "Viigud"],
    ["Motors", "Motores", "Mootorid"],
    ["Servo", "Servo", "Servo"],
    ["DC", "CC", "DC"],
    ["Sensors", "Sensores", "Andurid"],
    ["Sonar", "Sonar", "Kajalood"],
    ["Control", "Control", "Kontroll"],
    ["Math", "Matemática", "Aritmeetika"],
    ["Variables", "Variables", "Muutujad"],
    ["Functions", "Funciones", "Funktsioonid"],
    ["Comments", "Comentarios", "Kommentaarid"],
    ["Procedures", "Procedimientos", "Protseduurid"],
    ["Configure DC motors...", "Configurar motores CC...", "Seadista mootorid..."],
    ["Configure sonars...", "Configurar sonares...", "Seadista kajalood..."],
    ["random integer from %1 to %2", "número entero al azar entre %1 y %2", "suvaline täisarv %1 ja %2 vahel"],
    ["constrain %1 low %2 high %3", "mantener %1 entre %2 y %3", "piira %1 olema %2 ja %3 vahel"],
    ["random fraction", "fracción al azar", "suvaline murdarv"],
    ["square root", "raíz cuadrada", "ruutjuur"],
    ["absolute", "valor absoluto", "absoluutarv"],
    ["-", "-", "-"],
    ["ln", "ln", "ln"],
    ["log10", "log10", "log10"],
    ["e^", "e^", "e^"],
    ["10^", "10^", "10^"],
    ["sin", "seno", "sin"],
    ["cos", "coseno", "cos"],
    ["tan", "tangente", "tan"],
    ["asin", "arcoseno", "asin"],
    ["acos", "arcocoseno", "acos"],
    ["atan", "arcotangente", "atan"],
    ["round", "redondear", "ümardamine"],
    ["round up", "redondear hacia arriba", "ümarda üles"],
    ["round down", "redondear hacia abajo", "ümarda alla"],
    ["remainder of %1 ÷ %2", "resto de %1 ÷ %2", "%1 ÷ %2 jääk"],
    ["Configure variables...", "Configurar variables...","Seadista muutujaid..."],
    ["Configure variables", "Configurar variables", "Seadista muutujaid"],
    ["Variable name", "Nombre de variable", "Muutuja nimi"],
    ["declare local variable %1 with value %2", "declarar variable local %1 con valor %2", "loo muutuja %1 väärtusega %2"],
    ["set %1 to %2", "establecer %1 a %2", "määra %1 väärtuseks %2"],
    ["increment %1 by %2", "incrementar %1 por %2", "kasvata %1 suurusega %2"],
    ["procedure named %1 %2", "procedimiento llamado %1 %2", "protseduur nimega %1 %2"],
    ["procedure named %1 with argument %2 %3", "procedimiento llamado %1 con argumento %2 %3", "protseduur nimega %1 argumendiga %2 %3"],
    ["procedure named %1 with arguments %2 %3 %4", "procedimiento llamado %1 con argumentos %2 %3 %4", "protseduur nimega %1 argumentidega %2 %3 %4"],
    ["procedure named %1 with arguments %2 %3 %4 %5", "procedimiento llamado %1 con argumentos %2 %3 %4 %5", "protseduur nimega %1 argumentidega %2 %3 %4 %5"],
    ["exit", "salir", "exit"],
    ["execute", "ejecutar", "execute"],
    ["function named %1 %2", "función llamada %1 %2", "funktsioon nimega %1 %2"],
    ["function named %1 with argument %2 %3", "función llamada %1 con argumento %2 %3", "funktsioon nimega %1 argumentidega %2 %3"],
    ["function named %1 with arguments %2 %3 %4", "función llamada %1 con argumentos %2 %3 %4", "funktsioon nimega %1 argumentidega %2 %3 %4"],
    ["function named %1 with arguments %2 %3 %4 %5", "función llamada %1 con argumentos %2 %3 %4 %5", "funktsioon nimega %1 argumentidega %2 %3 %4 %5"],
    ["return", "devolver", "tagasta"],
    ["evaluate", "evaluar", "arvuta"],
    ["Sound", "Sonido", "Sound"],
    ["play tone %1 on pin %2", "reproducir tono %1 en el pin %2", "play tone %1 on pin %2"],
    ["play tone %1 on pin %2 for %3 %4", "reproducir tono %1 en el pin %2 durante %3 %4", "play tone %1 on pin %2 for %3 %4"],
    ["stop tone on pin %1", "detener tono en el pin %1", "stop tone on pin %1"],
    ["stop tone on pin %1 and wait %2 %3", "detener tono en el pin %1 y esperar %2 %3", "stop tone on pin %1 and wait %2 %3"],
    ["Buttons", "Botones", "Buttons"],
    ["is button %1 on pin %2", "está %1 el botón en el pin %2", "is button %1 on pin %2"],
    ["wait for button %1 on pin %2", "esperar hasta que %1 el botón en el pin %2", "wait for button %1 on pin %2"],
    ["elapsed milliseconds while pressing %1", "milisegundos transcurridos presionando el pin %1", "elapsed milliseconds while pressing %1"],
    ["pressed", "presionado", "pressed"],
    ["released", "suelto", "released"],
    ["press", "presione", "press"],
    ["release", "suelte", "release"],
];
