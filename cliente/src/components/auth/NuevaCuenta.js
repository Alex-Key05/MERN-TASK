import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: '',
    });

    const { nombre, email, password, confirmar } = usuario;
    
    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        
        // Validar que no haya campos vacío
        if(email.trim() === '' || password.trim() === '') {
            console.log('Llena todos los campos')
        }

        // Password mínimo de 6 caracteres

        // Los passwords sean iguales

        // Pasarlo al action


    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            onChange={handleChange}
                            value={nombre}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={handleChange}
                            value={email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={handleChange}
                            value={password}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            onChange={handleChange}
                            value={confirmar}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarme"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Login
                </Link>
            </div>
        </div>
    )
}

export default NuevaCuenta
