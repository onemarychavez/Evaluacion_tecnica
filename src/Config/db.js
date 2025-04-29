const {Pool} = require('pg')
require('dotenv').config()

//Creacion del arreglo de datos agregando las variables
const conexion = new Pool({
host: process.env.PGHOST,
user: process.env.PGUSER,
password: process.env.PGPASSWORD,
database:process.env.PGDBNAME,
port:process.env.PGPORT
})

//se hace una test de conexion a la base de datos
conexion
.connect()
.then(() => console.log('Conectado'))
.catch(() => console.log('Error al conectarse'))

module.exports = conexion