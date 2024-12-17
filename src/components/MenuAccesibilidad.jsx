import React, { useState, createContext, useContext, useEffect } from 'react';
import '../css/MenuAccesibilidad.css';
import Cursor from '../assets/Cursor1.svg';
import Fuente from '../assets/Fuente.svg';
import Lector from '../assets/lector.svg';
import Contraste from '../assets/contrast.svg';

const FuenteContext = createContext();
export const useFontSize = () => useContext(FuenteContext);

const LectorContext = createContext();
export const useLector = () => useContext(LectorContext);

const fontSizes = ['12px', '16px', '20px'];

const MenuAccesibilidad = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [fontSizeIndex, setFontSizeIndex] = useState(1);
    const [isHighContrast, setIsHighContrast] = useState(false);
    const [isReading, setIsReading] = useState(false);
    const [isCursorActive, setIsCursorActive] = useState(false); // Estado para el cursor

    const toggleFontSize = () => setFontSizeIndex((prevIndex) => (prevIndex + 1) % fontSizes.length);

    const toggleContrast = () => {
        setIsHighContrast((prev) => !prev);
        document.body.classList.toggle('high-contrast');
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleReading = () => {
        if (isReading) window.speechSynthesis.pause();
        else window.speechSynthesis.resume();
        setIsReading(!isReading);
    };

    const readContent = () => {
        const activeElement = document.activeElement;
        let textToRead = activeElement.innerText || (activeElement.tagName === 'IMG' && activeElement.alt);
        if (textToRead && !isReading) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(textToRead);
            window.speechSynthesis.speak(utterance);
            setIsReading(true);
        } else if (isReading) {
            window.speechSynthesis.cancel();
            setIsReading(false);
        }
    };

    useEffect(() => {
        const handleFocus = (event) => {
            let textToRead = event.target.innerText || (event.target.tagName === 'IMG' && event.target.alt);
            if (textToRead && !isReading) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(textToRead);
                window.speechSynthesis.speak(utterance);
            }
        };
        document.addEventListener('focusin', handleFocus);
        return () => document.removeEventListener('focusin', handleFocus);
    }, [isReading]);

    const toggleCursorSize = () => {
        setIsCursorActive((prev) => !prev); // Alternar el estado del cursor
    };

    useEffect(() => {
        const cursorUrl = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M302.2 329.1H196.1l55.8 136c3.9 9.4-.6 20-9.4 24l-49.2 21.4c-9.2 4-19.4-.6-23.3-9.7l-53.1-129.1-86.7 89.1C18.7 472.7 0 463.6 0 448V18.3C0 1.9 19.9-6.1 30.3 5.4l284.4 292.5c11.5 11.2 3 31.1-12.5 31.1z" /></svg>`;
        const styleId = "custom-cursor-style";
        let style = document.getElementById(styleId);

        if (isCursorActive || document.body.classList.contains("high-contrast")) {
            document.body.style.cursor = `url('${cursorUrl}') 16 16, auto`;

            if (!style) {
                style = document.createElement("style");
                style.id = styleId;
                style.innerHTML = `
                button, a, .menu-accesibilidad button, .menu-accesibilidad a {
                    cursor: inherit;
                }
            `;
                document.head.appendChild(style);
            }
        } else {
            document.body.style.cursor = "auto";
            if (style) document.head.removeChild(style);
        }

        return () => {
            const styleToRemove = document.getElementById(styleId);
            if (styleToRemove) document.head.removeChild(styleToRemove);
        };
    }, [isCursorActive]);



    return (
        <LectorContext.Provider value={{ isReading, readContent }}>
            <FuenteContext.Provider value={{ fontSize: fontSizes[fontSizeIndex], toggleFontSize }}>
                <div
                    style={{
                        fontSize: fontSizes[fontSizeIndex],
                        transition: 'font-size 0.3s ease',
                    }}
                >
                    <div className={`menu-accesibilidad ${isOpen ? 'open' : 'closed'}`}>
                        <button onClick={toggleMenu} className="menu-toggle" aria-expanded={isOpen} aria-controls="accesibilidad-menu">
                            {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
                        </button>
                        {isOpen && (
                            <div className="menu-items">
                                <div style={{ fontWeight: 'bold' }}>Menú Accesibilidad</div>
                                <ul>
                                    <li>
                                        <button onClick={toggleFontSize}>
                                            <img src={Fuente} alt="Cambiar Tamaño de Fuente" className='icon' />
                                            Tamaño Fuente: {fontSizeIndex === 0 ? 'Pequeño' : fontSizeIndex === 1 ? 'Normal' : 'Grande'}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={toggleContrast}>
                                            <img src={Contraste} alt="Cambiar Contraste" className='icon' />
                                            {isHighContrast ? 'Desactivar Contraste Alto' : 'Activar Contraste Alto'}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={toggleReading}>
                                            <img src={Lector} alt="Lector de Pantalla" className='icon' />
                                            {isReading ? 'Iniciar Lector' : 'Pausar Lector'}
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={toggleCursorSize}>
                                            <img src={Cursor} alt="Cambiar Cursor" className='icon' />
                                            {isCursorActive ? 'Restablecer Cursor' : 'Cursor Personalizado'}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div style={{ fontSize: fontSizes[fontSizeIndex], transition: 'font-size 0.3s ease' }}>
                        {children}
                    </div>
                </div>
            </FuenteContext.Provider>
        </LectorContext.Provider>
    );
};

export default MenuAccesibilidad;
