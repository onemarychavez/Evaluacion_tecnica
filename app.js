const express = require('express')
const cors = require('cors')
const conexion = require('./src/Config/db')
const app = express()
const port = 4000
const UsuariosRouter = require('./src/Routes/UsuariosRoutes')

app.use(express.json())
app.use(cors())
app.use('/api',UsuariosRouter)

app.listen(port,() =>{
    console.log(`El servidor esta escuchando en el puerto ${port}`)
})