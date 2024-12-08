// Importación de las bibliotecas y componentes que se utilizarán en la página de Inicio
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/Home.css';

// Importar imagénes
import InclusionImg from '../assets/inclusion.jpg';
import WcagImg from '../assets/wcag.webp';
import SenadisImg from '../assets/senadis.png';

// Código de la página de Inicio
const Home = () => {
    // Configuración del Carrusel
    const sectionData = [
        { title: '¿Qué es la Inclusión?', to:'/inclusion', image: InclusionImg },
        { title: '¿Qué son las pautas de la WCAG?', to:'/wcag', image: WcagImg },
        { title: '¿Qué es el SENADIS?', to:'/senadis', image: SenadisImg },
    ];

    const CustomPrevArrow = (props) => (
        <div className='slick-prev' onClick={props.onClick}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
    );

    const CustomNextArrow = (props) => (
        <div className='slick-next' onClick={props.onClick}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
    );

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,

    };

    // Inicio
    return (
        <div className='Home'>
            <div className='Home-title'>
                <h1 tabIndex="0" role="button">Bienvenido a la Guía de Sitios Inclusivos y Accesibles</h1>
            </div>
            <div className='carousel-container'>
                <Slider {...settings}>
                    {sectionData.map((section, index) => (
                        <Link to={section.to} className="Home-section" key={index}>
                            <div className="Home-image-container" tabIndex="0">
                                <img src={section.image} alt={section.title} className='Home-image' />
                                <div className='Home-info'>
                                    <h2 tabIndex="0" role="button">{section.title}</h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Home;