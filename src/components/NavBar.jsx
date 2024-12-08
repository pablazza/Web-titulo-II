import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/NavBar.css';

const links = [
    { name: 'Inicio', href: '/home' },
    { name: 'Sobre este sitio', href: '/info' },
    { name: 'Contacto', href: '/contact' },
];

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className="NavBar" aria-label="Navegación Principal">
            <div className="NavBar-container">
                {links.map((link) => (
                    <Link key={link.href} to={link.href} 
                    className={`NavBar-link ${location.pathname === link.href ? 'NavBar-link--active' : ''}`} 
                    aria-current={location.pathname === link.href ? 'page' : undefined} 
                    aria-label={link.name}>
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default NavBar;