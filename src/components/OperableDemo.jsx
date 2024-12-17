// Importe de Bibliotecas y Componentes
import React, { useState, useEffect } from 'react';
import '../css/OperableDemo.css';

// Código de la Demo de Operable
const OperableDemo = () => {
    const [timer, setTimer] = useState(10); // Temporizador Ajustable
    const [paused, setPaused] = useState(false);

    // Manejo del temporizador
    useEffect(() => {
        let interval = null;

        if (!paused && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        
        return () => clearInterval(interval);
    }, [paused, timer]);

    const handlePauseToggle = () => {
        setPaused((prev) => !prev);
    };

    const handleAddTime = () => {
        setTimer((prev) => prev + 10);
    };

    return (
        <div className='Operable'>
            <h2 tabIndex="0">Navegación por Teclado</h2>
            <ul className='keyboard-nav'>
                <li tabIndex="0">Elemento 1 (usa Tab para enfocar)</li>
                <li tabIndex="0">Elemento 2 (usa Tab para enfocar)</li>
                <li tabIndex="0">Elemento 3 (usa Tab para enfocar)</li>
            </ul>
            <h2 tabIndex="0">Temporizador Ajustable</h2>
            <p tabIndex="0">
                Tiempo Restante: <strong>{timer} segundos</strong>
            </p>
            <button onClick={handlePauseToggle} className='control-button' tabIndex="0">
                {paused ? 'Reanudar' : 'Pausar'}
            </button>
            <button onClick={handleAddTime} className='control-button' tabIndex="0">
                Añadir 10 segundos
            </button>
            <h2 tabIndex="0">Botones Accesibles</h2>
            <button onClick={() => alert('Botón activado!')} className='control-button'>
                Presiona Enter o haz click aquí
            </button>
        </div>
    )
};

export default OperableDemo;