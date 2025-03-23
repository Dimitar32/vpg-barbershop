import React from 'react';
import Velizar from '../Home/Velizar.jpg';
import Plamen from '../Home/PlamenGanev.jpg';
import { InlineWidget } from 'react-calendly';
import { Link as ScrollLink } from 'react-scroll';
import './Home.css'

// Helper function to calculate age
const calculateAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

const Home = () => {
  const barbers = [
    {
      id: 1,
      name: 'Велизар Ганев',
      birthDate: '2001-04-05',
      description: 'С повече от 10 години опит, Зарко е майстор на класическото подстригване и оформянето на брада.',
      image: Velizar, 
    },
    {
      id: 2,
      name: 'Пламен Ганев',
      birthDate: '2003-01-22',
      description: 'Пацо е специалист в модерните стилове и обръща внимание на детайлите за перфектния завършек.',
      image: Plamen, 
    },
  ];

  const customers = [
    {
      id: 1,
      image: Velizar, 
    },
    {
      id: 2,
      image: Plamen, 
    }
  ];

  return (
  <div className="home">
    
    <section className='homewatermarkphoto'>
      <div className='insidehomewatermarkphoto'>
        <h1>Добре дошли в нашата бръснарница!</h1>
        <p>Ние предлагаме качествени услуги за подстригване и оформяне на брада, с внимание към детайла и професионализъм.</p>
        
        <div className="cta">
          <h2>Запазете своя час сега!💈✂️</h2>
            <button className="btn-reservation">
              <ScrollLink to="reservation" smooth={true} duration={500}>
                Запази час
              </ScrollLink>
            </button>
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
      
    <section className="reservation">
        <InlineWidget 
                url="https://calendly.com/dimitarivanov2525/meet-with-me"
        />
    </section>

    <section className="barbers">
        <h2>Нашите бръснари</h2>
        <div className="barber-list">
          {barbers.map((barber) => (
            <div key={barber.id} className="barber">
              <img src={barber.image} alt={barber.name} className="barber-photo" />
              <h3>{barber.name}</h3>
              <p>{calculateAge(barber.birthDate)} години</p>
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
