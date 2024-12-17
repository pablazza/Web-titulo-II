import React from 'react';
import '../css/Inclusion.css';
import Discapacidad from '../assets/discapacidad.jpeg';

const Inclusion = () => {
    return (
        <div className='Inclusion'>
            <h1 tabIndex="0">¿Qué es la Inclusión?</h1>
            <p tabIndex="0">
                La Inclusión se define como el enfoque que busca responder positivamente a
                la existencia de diversidad de las personas con sus respectivas diferencias individuales, busca lograr
                la integración de todos los grupos sociales, particularmente aquellos que se encuentran en condiciones de 
                segregación o marginación para que puedan obtener las mismas oportunidades dentro de la sociedad.
            </p>
            <h2 tabIndex="0">Tipos de Inclusión:</h2>
            <p tabIndex="0">
                Hay diferentes tipos de inclusión para las personas, entre estos tipos de inclusión destacan los siguientes:
            </p>
            <ul>
                <li>
                    <h3 tabIndex="0">Inclusión Tecnológica o Digital:</h3>
                    <p tabIndex="0">
                        Consiste en que todas las personas puedan contribuir y beneficiarse de la economía y sociedad digital, grantizando el acceso a las TIC y facilitando el acceso a personas
                        con el uso de tecnologías de asistencia.
                    </p>
                </li>
                <li>
                    <h3 tabIndex="0">Inclusión Laboral:</h3>
                    <p tabIndex="0">
                        Consiste en incorporar al mercado laboral a todas las personas con discapacidad, para que aprendan a realizar sus trabajos y accedan a las mismas oportunidades laborales
                        que el resto.
                    </p>
                </li>
                <li>
                    <h3 tabIndex="0">Inclusión Educativa:</h3>
                    <p tabIndex="0">
                        Consiste en perseguir la igualdad de oportunidades en el ámbito educativo, promoviendo la participación activa de los estudiantes con discapacidad en todos los entornos educativos
                        convencionales.
                    </p>
                </li>
                <li>
                    <h3 tabIndex="0">Inclusión Social:</h3>
                    <p tabIndex="0">
                        Fomenta la aceptación y el respeto a la diversidad, al incorporar a todos estos colectivos a diferentes actividades de la vida social con el fin de que coincidan con otras 
                        personas que comparten los mismos intereses o preferencias.
                    </p>
                </li>
                <li>
                    <h3 tabIndex="0">Inclusión Sanitaria:</h3>
                    <p tabIndex="0">
                        Preserva la autonomía y voluntad de las personas con discapacidad en lo referente a atención sanitaria.
                    </p>
                </li>
            </ul>
            <div className='Inclu-img'>
                <img src={Discapacidad} tabIndex="0" alt="Imagen Inclusión" />
            </div>
        </div>
    );
};

export default Inclusion;