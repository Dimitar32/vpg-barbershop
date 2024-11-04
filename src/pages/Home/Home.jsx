import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => (
  <div className="home">
    <h1>Добре дошли в нашата бръснарница!</h1>
    <p>Ние предлагаме качествени услуги за подстригване и оформяне на брада, с внимание към детайла и професионализъм.</p>
    
    <div className="cta">
      <h2>Запазете своя час сега!</h2>
      <Link to="/reservation">
        <button className="btn-reservation">Запази час</button>
      </Link>
    </div>
    
    <section className="services">
      <h2>Нашите услуги</h2>
      <ul>
        <li>Подстригване</li>
        <li>Оформяне на брада</li>
        <li>Подстригване с брада</li>
      </ul>
    </section>

    <section className="about">
      <h2>За нас</h2>
      <p>С години опит и страст към занаята, ние се стремим да предложим най-доброто обслужване за нашите клиенти. Нашият екип е професионален и посветен на качеството и удовлетвореността на клиента.</p>
    </section>
  </div>
);

export default Home;
