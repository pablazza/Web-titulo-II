// Importación de las bibliotecas y componentes que se utilizarán en la página de Inicio
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

// Importar imágenes
import InclusionImg from '../assets/inclusion.jpg';
import WcagImg from '../assets/wcag.webp';
import SenadisImg from '../assets/senadis.png';

// Código de la página de Inicio
const Home = () => {
    return (
        <div className='Home'>
            <div className='Home-title'>
                <h1 tabIndex="0">Bienvenido a la Guía de Sitios Inclusivos y Accesibles</h1>
            </div>
            <div className='Home-sections'>
                {/* Sección de Inclusión */}
                <div className="Home-section">
                    <Link to="/inclusion" className="Home-link" aria-hidden="true" tabIndex="-1">
                        <div className="Home-image-container">
                            <img src={InclusionImg} alt="Inclusión" className='Home-image' tabIndex="0" />
                        </div>
                    </Link>
                    <div className='Home-info'>
                        <h2 tabIndex="0">¿Qué es la Inclusión?</h2>
                        <p tabIndex="0">
                            La inclusión busca eliminar barreras y garantizar que todas las personas, sin importar sus condiciones, participen plenamente en la sociedad.
                        </p>
                        <Link to="/inclusion" className="Home-link">
                            Más información aquí
                        </Link>
                    </div>
                </div>
                {/* Sección de WCAG */}
                <div className="Home-section">
                    <Link to="/wcag" className="Home-link" aria-hidden="true" tabIndex="-1">
                        <div className="Home-image-container">
                            <img src={WcagImg} alt="Pautas de la WCAG" className='Home-image' tabIndex="0" />
                        </div>
                    </Link>
                    <div className='Home-info'>
                        <h2 tabIndex="0">¿Qué son las Pautas de la WCAG?</h2>
                        <p tabIndex="0">
                            Las pautas de la WCAG proporcionan estándares internacionales para hacer sitios web accesibles para todos, incluidas las personas con discapacidad.
                        </p>
                        <Link to="/wcag" className="Home-link">
                            Más información aquí
                        </Link>
                    </div>
                </div>
                {/* Sección de SENADIS */}
                <div className="Home-section">
                    <Link to="/senadis" className="Home-link" aria-hidden="true" tabIndex="-1">
                        <div className="Home-image-container">
                            <img src={SenadisImg} alt="SENADIS" className='Home-image' tabIndex="0" />
                        </div>
                    </Link>
                    <div className='Home-info'>
                        <h2 tabIndex="0">¿Qué es el SENADIS?</h2>
                        <p tabIndex="0">
                            SENADIS es el Servicio Nacional de la Discapacidad, encargado de promover y garantizar los derechos de las personas con discapacidad en Chile.
                        </p>
                        <Link to="/senadis" className="Home-link">
                            Más información aquí
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
