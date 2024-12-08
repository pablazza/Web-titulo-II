// Importe de Bibliotecas y Componentes
import React from 'react';
import Pablo from '../assets/fotopablo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Contact.css';

// Código de la página de Contacto
const Contact = () => {

    return (
        <div className='Contact-container'>
            <h1 tabIndex="0" role="button">
                Contacto
            </h1>
            <div className='Contact-info'>
                <div className='Contact-img' tabIndex="0" role="button">
                    <img src={Pablo} alt="Fotografía de Pablo Zúñiga" tabIndex="0" />
                </div>
                <div className='Contact-Data'>
                    <h2 tabIndex="0" role="button">Pablo Zúñiga Naranjo</h2>
                    <h4 tabIndex="0" role="button">+56 9 4101 7848</h4>
                    <h4 tabIndex="0" role="button">pzunigan@utem.cl</h4>
                    <div className="Contact-Social">
                        <a href="https://www.linkedin.com/in/pablo-enrique-zúñiga-naranjo/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a href="https://github.com/pablazza" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;