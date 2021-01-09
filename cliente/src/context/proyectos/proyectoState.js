import { useReducer } from "react";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

import { OBTENER_PROYECTOS, FORMULARIO_PROYECTO } from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Cursos de inglés" },
    { id: 2, nombre: "Curso de .Net core" },
    { id: 3, nombre: "Comandos básicos de Linux" },
  ];

  const initialState = {
    proyectos: [],
    formulario: false,
  };

  // Dispacth para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // Serie de funciones del CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // Obtener los proyectos
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario, // state
        mostrarFormulario, // fn
        obtenerProyectos,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
