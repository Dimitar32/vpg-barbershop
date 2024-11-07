import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} VPG Barber. Всички права запазени.</p>
    <p>Адрес: бул. Цар Симеон Велики 258, Град Стара Загора</p>
    <p>Телефон: +359 123 456 789</p>
  </footer>
);

export default Footer;
