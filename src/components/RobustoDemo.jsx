import React, { useState } from 'react';
import '../css/RobustoDemo.css';

const RobustoDemo = () => {
    const [data, setData] = useState([
        { id: 1, name: 'Juan Pérez', role: 'Desarrollador', email: 'juan@example.com' },
        { id: 2, name: 'Ana Gómez', role: 'Diseñadora', email: 'ana@example.com' },
        { id: 3, name: 'Carlos Ruiz', role: 'Tester', email: 'carlos@example.com' },
    ]);

    return (
        <div className='Robusto'>
            <h2 tabIndex="0">Demostración de Accesibilidad: Robusto</h2>
            <p tabIndex="0">
                Esta demo muestra una tabla accesible y compatible con tecnologías de asistencia.
            </p>
            <table className="accessible-table" role="table">
                <caption>Lista de empleados con roles y correos electrónicos</caption>
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Correo Electrónico</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>
                                <a href={`mailto:${item.email}`} aria-label={`Enviar correo a ${item.name}`}>
                                    {item.email}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RobustoDemo;
