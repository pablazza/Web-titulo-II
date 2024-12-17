import React, { useState } from 'react';
import '../css/ComprensibleDemo.css';

const ComprensibleDemo = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) {
            newErrors.name = 'El nombre es obligatorio.';
        }
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'El formato del correo electrónico no es válido.';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            alert('Formulario enviado con éxito.');
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Borra errores al cambiar el campo
    };

    return (
        <div className="Comprensible">
            <h2 tabIndex="0">Demostración de Accesibilidad: Comprensible</h2>
            <p tabIndex="0">
                Esta demo muestra un formulario accesible con validación y mensajes claros para los usuarios.
            </p>
            <form onSubmit={handleSubmit} aria-labelledby="form-heading">
                <fieldset>
                    <legend id="form-heading">Formulario de Registro</legend>
                    
                    {/* Campo Nombre */}
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-describedby="name-error"
                        aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name && (
                        <span id="name-error" className="error-message" role="alert">
                            {errors.name}
                        </span>
                    )}

                    {/* Campo Email */}
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-describedby="email-error"
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                        <span id="email-error" className="error-message" role="alert">
                            {errors.email}
                        </span>
                    )}

                    {/* Botón Enviar */}
                    <button type="submit" className="control-button">
                        Enviar
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default ComprensibleDemo;