// Importe de Bibliotecas y Componentes
import React, { useState, createContext, useContext, useEffect } from 'react';
import '../css/MenuAccesibilidad.css';

// Crear contexto para la fuente
const FuenteContext = createContext();

export const useFontSize = () => {
    return useContext(FuenteContext);
};

const fontSizes = ['12px', '16px', '20px'];

// Crear contexto para el lector
const LectorContext = createContext();

export const useLector = () => {
    return useContext(LectorContext);
};

const MenuAccesibilidad = ({ children }) => {
    // Estados iniciales de cada opción del Menú
    const [isOpen, setIsOpen] = useState(false); // Estado del Menú
    const [fontSizeIndex, setFontSizeIndex] = useState(1); // Tamaño Normal
    const [isHighContrast, setIsHighContrast] = useState(false); // Contraste
    const [isReading, setIsReading] = useState(false); // Lector de Texto

    const toggleFontSize = () => {
        setFontSizeIndex((prevIndex) => (prevIndex + 1) % fontSizes.length);
    };

    const toggleContrast = () => {
        setIsHighContrast((prev) => !prev); // Cambiar el estado de contraste
        document.body.classList.toggle('high-contrast'); // Cambiar clase del body
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const readContent = () => {
        const activeElement = document.activeElement;
        let textToRead = '';

        // Obtener el texto del elemento activo o el atributo alt si es una imagen
        if (activeElement && activeElement.innerText) {
            textToRead = activeElement.innerText;
        }

        if (activeElement.tagName === 'IMG' && activeElement.alt) {
            textToRead = activeElement.alt;
        }

        // Leer el contenido si hay texto y el lector está habilitado
        if (textToRead && !isReading) {
            window.speechSynthesis.cancel(); // Cancelar cualquier lectura anterior
            const utterance = new SpeechSynthesisUtterance(textToRead);
            window.speechSynthesis.speak(utterance); // Leer el nuevo texto
            setIsReading(true); // Actualizar el estado
        } else if (isReading) {
            window.speechSynthesis.cancel(); // Detener la lectura
            setIsReading(false); // Actualizar el estado
        }
    };

    useEffect(() => {
        const handleFocus = (event) => {
            let textToRead = '';

            // Leer el texto del elemento enfocado
            if (event.target.innerText) {
                textToRead = event.target.innerText;
            }

            // Si el elemento es una imagen, leer su atributo alt
            if (event.target.tagName === 'IMG' && event.target.alt) {
                textToRead = event.target.alt;
            }

            if (textToRead && !isReading) {
                window.speechSynthesis.cancel(); // Detener la lectura anterior
                const utterance = new SpeechSynthesisUtterance(textToRead);
                window.speechSynthesis.speak(utterance); // Leer el nuevo elemento enfocado
            }
        };

        document.addEventListener('focusin', handleFocus); // Agregar el evento

        return () => {
            document.removeEventListener('focusin', handleFocus); // Limpiar el evento al desmontar
        };
    }, [isReading]); // Dependencia en isReading

    return (
        <LectorContext.Provider value={{ isReading, readContent }}>
            <FuenteContext.Provider value={{ fontSize: fontSizes[fontSizeIndex], toggleFontSize }}>
                <div style={{
                    fontSize: fontSizes[fontSizeIndex], transition: 'font-size 0.3s ease',
                }}>
                    <div className={`menu-accesibilidad ${isOpen ? 'open' : 'closed'}`} style={{ fontSize: '16px' }}>
                        <button onClick={toggleMenu} className="menu-toggle" aria-expanded={isOpen}>
                            {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
                        </button>
                        {isOpen && (
                            <div className="menu-items">
                                <div style={{ fontStyle: 'bold' }}>Menú Accesibilidad</div>
                                <ul>
                                    <li>
                                        <button onClick={toggleFontSize}>Cambiar Tamaño de Fuente</button>
                                    </li>
                                    <li>
                                        <button onClick={toggleContrast}>
                                            {isHighContrast ? 'Desactivar Contraste Alto' : 'Activar Contraste Alto'}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={readContent}>
                                            {isReading ? 'Iniciar Lector' : 'Detener Lector'}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div style={{
                        fontSize: fontSizes[fontSizeIndex],
                        transition: 'font-size 0.3s ease',
                    }}>
                        {children}
                    </div>
                </div>
            </FuenteContext.Provider>
        </LectorContext.Provider>
    );
};

export default MenuAccesibilidad;