import React from 'react';
import Slider from 'react-slick';
import Velizar from '../Home/Velizar.jpg';
import Plamen from '../Home/PlamenGanev.jpg';
import { Link } from 'react-router-dom';
import './Home.css'



const Home = () => {
  const barbers = [
    {
      id: 1,
      name: 'Велизар Ганев',
      age: 23,
      description: 'С повече от 10 години опит, Зарко е майстор на класическото подстригване и оформянето на брада.',
      image: Velizar, // Път към изображението
    },
    {
      id: 2,
      name: 'Пламен Ганев',
      age: 21,
      description: 'Пацо е специалист в модерните стилове и обръща внимание на детайлите за перфектния завършек.',
      image: Plamen, // Път към изображението
    },
  ];

  const customers = [
    {
      id: 1,
      image: Velizar, // Път към снимка на доволен клиент
    },
    {
      id: 2,
      image: Plamen, // Път към снимка на доволен клиент
    },
    // Добави още снимки на клиенти тук
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
  <div className="home">
    
      {/* Main background section with overlay text and CTA button */}
      <section className='homewatermarkphoto'>
        <div className='insidehomewatermarkphoto'>
          <h1>Добре дошли в нашата бръснарница!</h1>
          <p>Ние предлагаме качествени услуги за подстригване и оформяне на брада, с внимание към детайла и професионализъм.</p>
          
          <div className="cta">
            <h2>Запазете своя час сега!💈✂️</h2>
            <Link to="/reservation">
              <button className="btn-reservation">Запази час</button>
            </Link>
          </div>
        </div>
      </section>
        
        <section className="services">
          <h2>Нашите услуги</h2>
          <ul>
            <li>Подстригване</li>
            <li>Оформяне на брада</li>
            <li>Подстригване с брада</li>
          </ul>
        </section>
      
    {/* Динамична секция "Нашите бръснари" */}
    <section className="barbers">
        <h2>Нашите бръснари</h2>
        <div className="barber-list">
          {barbers.map((barber) => (
            <div key={barber.id} className="barber">
              <img src={barber.image} alt={barber.name} className="barber-photo" />
              <h3>{barber.name}</h3>
              <p>{barber.age} години</p>
              <p>{barber.description}</p>
            </div>
          ))}
        </div>
    </section>

    {/* Секция "Доволни клиенти" със само снимки */}
    <section className="testimonials">
        <h2>Доволни клиенти</h2>
        <div className="testimonial-list">
        {/* <Slider {...settings} className=""> */}

          {customers.map((customer) => (
            <img key={customer.id} src={customer.image} alt="Доволен клиент" className="customer-photo" />
          ))}
        {/* </Slider> */}
        </div>
    </section>

    <section className="about">
      <h2>За нас</h2>
      <p>С години опит и страст към занаята, ние се стремим да предложим най-доброто обслужване за нашите клиенти. Нашият екип е професионален и посветен на качеството и удовлетвореността на клиента.</p>
    </section>
  </div>
  );
};

export default Home;
