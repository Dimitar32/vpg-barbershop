import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>Barbershop Name</h1>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Начало</Link></li>
        <li><Link to="/reservation">Резервации</Link></li>
        <li><Link to="/contact">Контакти</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
