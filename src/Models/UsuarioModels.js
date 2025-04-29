const conexion = require('../Config/db')

//funcion para traer los usuarios
const listaUsuarios = async () => {
    const resultado = await conexion.query(
        `select 
            usuarios.nombre_user,
            usuarios.correo,
            usuarios.password,
            paises.nombre,
            usuarios.id_pais,
            usuarios.fecha_creacion,
            usuarios.activo
            FROM usuarios 
            INNER JOIN paises ON usuarios.id_pais = paises.id_pais`)
    return resultado.rows
}
//funcion para traer los usuario por id
const usuarioId = async (id) =>{
    const resultado = await conexion.query('select * from usuarios where id_user = $1',[id] )
    return resultado.rows[0];
}
//funcion para traer pais por id
const paisId = async (id) =>{
    const resultado = await conexion.query('select * from paises where id_pais = $1',[id] )
    return resultado.rows[0];
}

//funcion para crear usuarios
const crearUsuario = async ({nombre_user,correo,password,id_pais,fecha_creacion,activo}) => {
    const resultado = await conexion.query('INSERT INTO usuarios(nombre_user,correo,password,id_pais,fecha_creacion,activo)VALUES($1,$2,$3,$5,$6)RETURNING*',
        [nombre_user,correo,password,id_pais,fecha_creacion,activo])
    return resultado.rows[0]

}

const crearPais = async ({nombre,activo}) => {
    const resultado = await conexion.query('INSERT INTO paises(nombre,activo)VALUES($1,$2)RETURNING*',
        [nombre,activo])
    return resultado.rows[0]

}

//funcion para eliminar pais
const eliminarPais = async (id) =>{
    const resultado = await conexion.query('DELETE FROM paises WHERE id_pais = $1',[id])
}

//funcion para eliminar usuario
const eliminarUsuario = async (id) =>{
    const resultado = await conexion.query('DELETE FROM usuarios WHERE id_user = $1',[id])
}


module.exports= {
    listaUsuarios,
    crearUsuario,
    usuarioId,
    paisId,
    eliminarPais,
    eliminarUsuario,
    crearPais

}

