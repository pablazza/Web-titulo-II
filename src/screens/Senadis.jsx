// Importe de Bibliotecas y Componentes
import React from 'react';
import SENADISimg from '../assets/senadis.png';
import '../css/Senadis.css';

// Código de la Página de SENADIS
const Senadis = () => {
    return (
        <div className='Senadis'>
            <h1 tabIndex="0">¿Qué es el Senadis?</h1>
            <div className='Senadis-image-container'>
                <img src={SENADISimg} alt="Logo de SENADIS" tabIndex="0"/>
            </div>
            <p tabIndex="0">
                El Servicio Nacional de la Discapacidad (SENADIS) es una institución encargada de promover y proteger los derechos de las personas con discapacidades en Chile.
            </p>
            <a href="https://www.senadis.gob.cl" target="_blank" rel="noopener noreferrer" tabIndex="0">Visitar el sitio oficial de SENADIS</a>
            <h2 tabIndex="0">Información sobre el SENADIS</h2>
            <p>
            El Servicio Nacional de la Discapacidad fue creado por mandato de la Ley N° 20.422 que Establece Normas sobre Igualdad de Oportunidades e Inclusión Social de Personas con Discapacidad, normativa publicada en el Diario Oficial el 10 de febrero de 2010.
            Es un servicio público funcionalmente descentralizado y desconcentrado territorialmente, que tiene por finalidad promover el derecho a la igualdad de oportunidades de las personas con discapacidad, con el fin de obtener su inclusión social, contribuyendo al pleno disfrute de sus derechos y eliminando cualquier forma de discriminación fundada en la discapacidad, a través de la coordinación del accionar del Estado, la ejecución de políticas y programas, en el marco de estrategias de desarrollo local inclusivo.

El Servicio Nacional de la Discapacidad se relacionará con el Presidente de la República por intermedio del Ministerio de Desarrollo Social y Familia. 

Desde el Servicio Nacional de la Discapacidad, se han abierto oportunidades para las personas con discapacidad, promoviéndose la participación social y el pleno ejercicio de sus derechos.

Estamos mirando hacia delante, creando y promoviendo mayores y mejores oportunidades en los diversos sectores tanto públicos como privados, que nos permita avanzar hacia una cultura más inclusiva.
            </p>
        </div>
    );
};

export default Senadis;