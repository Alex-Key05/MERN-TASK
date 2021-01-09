import React from 'react'
import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareas = [
        { nombre: 'Administrador de pacientes', estado: true },
        { nombre: 'Tienda virtual', estado: false },
        { nombre: 'TODO-LIST', estado: true },
        { nombre: 'Veterinaria', estado: false },
] 

    return (
        <>
            <h2>Proyecto: Tienda Virtual</h2>
            <ul className="listado-tareas">
                { tareas.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tareas.map(tarea => (
                    <Tarea
                        key={tarea.nombre}
                        tarea={tarea}
                    />
                ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </>
    )
}

export default ListadoTareas
