const usuario = require('../Models/UsuarioModels')

const MostrarUsuarios = async (req,res) => {
    try {
        const resultado = await usuario.listaUsuarios()
        res.json(resultado)

    } catch (error) {
        res.status(401).json({message:'Error al mostrar los usuarios'})
    }
}

const AgregarUsuarios = async (req,res) => {
    try {
        const resultado = await usuario.crearUsuario(req.body)
        res.json(resultado)

    } catch (error) {
        res.status(401).json({message:'Error al crear los usuarios'})
    }
}
const AgregarPais = async (req,res) => {
    try {
        const resultado = await usuario.crearPais(req.body)
        res.json(resultado)

    } catch (error) {
        res.status(401).json({message:'Error al crear los usuarios'})
    }
}

const ObtenerUsuariosId = async (req,res) => {
    try {
        const {id} = req.params
        const resultado = await usuario.usuarioId(id)
        res.json(resultado)

    } catch (error) {
        res.status(401).json({message:'Error al mostrar el usuario'})
    }
}
const ObtenerPaisId = async (req,res) => {
    try {
        const {id} = req.params
        const resultado = await usuario.paisId(id)
        res.json(resultado)

    } catch (error) {
        res.status(401).json({message:'Error al mostrar el usuario'})
    }
}
const UsuarioEliminar = async (req,res) => {
    try {
        const {id} = req.params
        const resultado = await usuario.eliminarUsuario(id)
        res.json(resultado)

    } catch (error) {
        res.status(401).json({message:'Error al mostrar los usuarios'})
    }
}

const PaisEliminar = async (req,res) => {
    try {
        const {id} = req.params
        const resultado = await usuario.eliminarPais(id)
        res.json(resultado)

    } catch (error) {
        res.status(401).json({message:'Error al mostrar los usuarios'})
    }
}

module.exports ={
    MostrarUsuarios,
    AgregarUsuarios,
    ObtenerUsuariosId,
    ObtenerPaisId,
    UsuarioEliminar,
    PaisEliminar,
    AgregarPais

}