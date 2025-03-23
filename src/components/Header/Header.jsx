import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';


const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>VPG Barber</h1>
    </div>
    <nav>
      <ul>
        {/* <li>
            <ScrollLink to="/" smooth={true} duration={500}>
              Начало
            </ScrollLink>
        </li> */}
        <li>
            <ScrollLink to="reservation" smooth={true} duration={500}>
              Запази час
            </ScrollLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
