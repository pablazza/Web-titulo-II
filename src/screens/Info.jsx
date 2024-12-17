// Importación de las Bibliotecas y Componentes utilizados
import React from 'react';
import ReactLogo from '../assets/logo.svg';
import '../css/Info.css';

// Código de la página de Información
const Info = () => {

    return (
        <div className='Info-container'>
            <h1 className='Info-title' tabIndex="0">
                Sobre este Sitio
            </h1>
            <p className='Info-content' tabIndex="0">
                Este sitio web fue desarrollado como parte del Trabajo de Título sobre el Diseño y Desarrollo
                de Sitios Web Inclusivos y Accesibles, realizado por Pablo Zúñiga.
            </p>
            <h2 className='Info-Tech' tabIndex="0">
                Tecnologías y Herramientas Utilizadas
            </h2>
            <div className='Tech-Container'>
                <div className='Tech-Item'>
                    <div className='Tech-image-container'>
                        <img src={ReactLogo} alt="Logo de React" tabIndex="0" />
                    </div>
                    <div className='Tech-Info'>
                        <h3 className='Tech-Name' tabIndex="0">
                            React.js
                        </h3>
                        <p className='Tech-Description' tabIndex="0">
                            React.js es un Framework o Biblioteca de JavaScript de código abierto para la construcción de Sitios Web e Interfaces de Usuario.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;