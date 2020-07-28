import React from 'react';
import ButtonLink from '../ButtonLink';
import Logo from '../../assets/images/logo_120.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Engineering Videos Logo" />
            </a>
            <ButtonLink href="/" className="ButtonLink">
                Novo Vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;