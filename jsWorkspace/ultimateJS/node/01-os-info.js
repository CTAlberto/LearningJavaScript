const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('-------------------')

console.log('Nombre del sistema operativo', os.platform()) // Nombre del sistema operativo
console.log('Versión del sistema operativo', os.release()) // Versión del sistema operativo
console.log('Arquitectura', os.arch()) // Arquitectura del sistema
console.log('CPUs', os.cpus()) // Información de los CPUs
console.log('Memoria libre', os.freemem() / 1024 / 1024) // Memoria libre en bytes
console.log('Memoria total', os.totalmem() / 1024 / 1024) // Memoria total en bytes
console.log('uptime', os.uptime() / 60 / 60) // Cuanto tiempo lleva encendido el sistema en horas