// Importe de Bibliotecas y Componentes
import React, { useState } from 'react';
import WCAGimg from '../assets/wcag.webp';
import PerceptibleDemo from '../components/PerceptibleDemo';
import OperableDemo from '../components/OperableDemo';
import ComprensibleDemo from '../components/ComprensibleDemo';
import RobustoDemo from '../components/RobustoDemo';
import '../css/Wcag.css';

// Código de la Página de WCAG
const Wcag = () => {
    const [showPDemo, setShowPDemo] = useState(false);
    const [showODemo, setShowODemo] = useState(false);
    const [showCDemo, setShowCDemo] = useState(false);
    const [showRDemo, setShowRDemo] = useState(false);

    const togglePDemo = () => {
        setShowPDemo(prevShow => !prevShow);
    };

    const toggleODemo = () => {
        setShowODemo(prevShow => !prevShow);
    };

    const toggleCDemo = () => {
        setShowCDemo(prevShow => !prevShow);
    };

    const toggleRDemo = () => {
        setShowRDemo(prevShow => !prevShow);
    };

    return (
        <div className='Wcag'>
            <h1 tabIndex="0">¿Qué son las Pautas de la WCAG?</h1>
            <div className='Wcag-image-container'>
                <img src={WCAGimg} alt="Logo de la WCAG" tabIndex="0"/>
            </div>
            <p tabIndex="0">
                Las WCAG (Web Content Accesibility Guidelines) son un conjunto de recomendaciones desarrolladas por el W3C (World Wide Web Consortium) para hacer que el contenido web sea más accesible.
            </p>
            <a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer" tabIndex="0">Visitar WCAG</a>

            <h1 tabIndex="0">Los 4 Principios de la WCAG</h1>
            <div className='Principios'>
                <h2 tabIndex="0">Principio n°1 - Perceptible</h2>
                <p tabIndex="0">
                    El principio de "Perceptible" establece que la información y los componentes de la interfaz de usuario deben ser presentados de manera que los usuarios puedan percibirlos.
                </p>
                <h3 tabIndex="0">Ejemplo Interactivo</h3>
                <button onClick={togglePDemo} tabIndex="0">
                    {showPDemo ? 'Ocultar Demo' : 'Mostrar Demo'}
                </button>
                {showPDemo && <PerceptibleDemo />}
            </div>
            <div className='Principios'>
                <h2 tabIndex="0">Principio n°2 - Operable</h2>
                <p tabIndex ="0">
                    Los componentes de la interfaz de usuario y la navegación deben ser operables por teclado, permitiendo la interacción entre el usuario y la plataforma.
                </p>
                <ul>
                    <li tabIndex ="0"><strong>Teclado accesible:</strong> Todas las funciones del sitio están disponibles a través del uso del teclado.</li>
                    <li tabIndex ="0"><strong>Evitar convulsiones:</strong> El diseño de los contenidos del sitio no debe provocar convulsiones o ataques.</li>
                    <li tabIndex ="0"><strong>Indicador de foco:</strong> El indicador del foco del teclado debe ser visible.</li>
                </ul>
                <h3 tabIndex="0">Ejemplo Interactivo</h3>
                <button onClick={toggleODemo} tabIndex="0">
                    {showODemo ? 'Ocultar Demo' : 'Mostrar Demo'}
                </button>
                {showODemo && <OperableDemo />}
            </div>
            <div className='Principios'>
                <h2 tabIndex="0">Principio n°3 - Comprensible</h2>
                <p tabIndex="0">
                    La información y el manejo de la interfaz de usuario deben ser comprensibles, es decir, que puedan ser entendidos de manera fácil.
                </p>
                <ul>
                    <li tabIndex ="0"><strong>Orden lógico de navegación:</strong> Los contenidos del sitio web deben tener un orden lógico de navegación.</li>
                    <li tabIndex ="0"><strong>Atributo lang:</strong> En el código fuente, se debe identificar el idioma del sitio web mediante el atributo “lang”.</li>
                    <li tabIndex ="0"><strong>Sin cambios inesperados:</strong> Al recibir el foco del teclado, no se debe iniciar ningún cambio en el contexto.</li>
                    <li tabIndex ="0"><strong>Asistencia en la introducción de datos:</strong> Se debe ofrecer asistencia para evitar y corregir errores.</li>
                </ul>
                <h3 tabIndex="0">Ejemplo Interactivo</h3>
                <button onClick={toggleCDemo} tabIndex ="0">
                    {showCDemo ? 'Ocultar Demo' : 'Mostrar Demo'}
                </button>
                {showCDemo && <ComprensibleDemo />}
            </div>
            <div className='Principios'>
                <h2 tabIndex="0">Principio n°4 - Robusto</h2>
                <p tabIndex="0">
                    El contenido debe ser fiable y consistente para permitir su uso y navegación a través de una amplia variedad de aplicaciones de usuario y ayudas técnicas.
                </p>
                <ul>
                    <li tabIndex="0"><strong>Errores de sintaxis:</strong> El sitio web no debe contener errores de sintaxis en HTML/XHTML. Se recomienda el uso de herramientas de validación.</li>
                    <li tabIndex="0"><strong>Uso de hojas de estilo:</strong> Utiliza hojas de estilo en cascada (CSS) para la presentación de contenidos.</li>
                    <li tabIndex="0"><strong>Navegación en múltiples navegadores:</strong> Asegúrate de que el sitio sea navegable en varios navegadores.</li>
                </ul>
                <h3 tabIndex="0">Ejemplo Interactivo</h3>
                <button onClick={toggleRDemo} tabIndex="0">
                    {showRDemo ? 'OcultarDemo' : 'Mostrar Demo'}
                </button>
                {showRDemo && <RobustoDemo />}
            </div>
        </div>
    );
};

export default Wcag;