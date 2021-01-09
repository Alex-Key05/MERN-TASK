import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // Obtener el state de formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;

  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;
  const handleChange = (e) => {
    setProyecto({ ...proyecto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el proyecto

    // Agregar al state

    // Reiniciar el form
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          ></input>
        </form>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
