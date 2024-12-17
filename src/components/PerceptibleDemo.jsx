import React, { useState } from 'react';
import '../css/PerceptibleDemo.css';
import Demoimg from '../assets/onepiece.avif';

const PerceptibleDemo = () => {
    const [fontSize, setFontSize] = useState(16);

    const increaseFontSize = () => {
        setFontSize(prevSize => prevSize + 2);
    };

    const decreaseFontSize = () => {
        setFontSize(prevSize => Math.max(prevSize -2, 10));
    };

    const [altTextVisible, setAltTextVisible] = useState(false);

    const handleMouseOver = () => setAltTextVisible(true);
    const handleMouseOut = () => setAltTextVisible(false);

    return (
        <div className='Perceptible'>
            <h3 tabIndex="0">Imagen con Descripción</h3>
            <img src={Demoimg} alt="Imagen de Ejemplo" tabIndex="0" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
            {altTextVisible && <p className="alt-text">Imagen de Ejemplo</p>}
            <h3 tabIndex="0">Contraste Adecuado</h3>
            <p tabIndex="0">
                Este texto tiene un contraste adecuado para asegurar su lectura.
            </p>
            <h3 tabIndex="0">Texto Escalable</h3>
            <p tabIndex="0" style={{ fontSize: `${fontSize}px` }}>
                Este texto se ajusta utilizando unidades relativas.
            </p>
            <button onClick={increaseFontSize}>Aumentar Tamaño de Fuente</button>
            <button onClick={decreaseFontSize}>Disminuir Tamaño de Fuente</button>
            <h3 tabIndex="0">Navegación con Teclado</h3>
            <button onClick={() => alert('Acción Activada!')}>
                Presiona Enter o haz click aquí
            </button>
        </div>
    )
};

export default PerceptibleDemo;