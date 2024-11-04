import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Barbershop Name. Всички права запазени.</p>
    <p>Адрес: Улица 123, Град</p>
    <p>Телефон: +359 123 456 789</p>
  </footer>
);

export default Footer;
