const express = require('express')
const routes = express.Router()
const {MostrarUsuarios,
    AgregarUsuarios,
    ObtenerUsuariosId,
    ObtenerPaisId,
    UsuarioEliminar,
    PaisEliminar,AgregarPais} = require('../Controllers/usuarioControllers')

routes.get('/usuarios',MostrarUsuarios)
routes.post('/agregar/user',AgregarUsuarios)
routes.post('/agregar/pais',AgregarPais)
routes.get('/usuarios/:id',ObtenerUsuariosId)
routes.get('/pais/:id',ObtenerPaisId)
routes.delete('/eliminar/user/:id',UsuarioEliminar)
routes.delete('/eliminar/pais/:id',PaisEliminar)

module.exports = routes