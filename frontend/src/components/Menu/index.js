import React from 'react';
import Button from '../Button';
import Logo from '../../assets/images/logo_120.png';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Engineering Videos Logo" />
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;