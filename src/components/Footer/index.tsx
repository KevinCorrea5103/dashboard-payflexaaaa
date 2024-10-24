import React from 'react';
import Wave from 'react-wavify';
import { TelephoneFill, Calendar2CheckFill, EnvelopeFill } from 'react-bootstrap-icons';

const FooterCard = ({ Icon, title, content, buttonText, buttonLink }) => {
  return (
    <div className="footer-card">
      <div className="card-content">
        <div className="card-icon">
          <Icon size={32} color="#00c4f4" />
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
        <a href={buttonLink} className="card-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <style>
        {`
          .footer-container {
            position: relative;
            min-height: 800px;
            background: white;
            overflow: hidden;
          }

          .waves-container {
            position: absolute;
            inset: 0;
            z-index: 1;
          }

          .top-wave {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 150px;
            z-index: 3;
          }

          .animated-waves {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50%;
            z-index: 2;
          }

          .wave {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
          }

          .main-content {
            position: relative;
            z-index: 4;
            max-width: 1200px;
            margin: 0 auto;
            padding: 6rem 1rem 4rem;
          }

          .cards-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 4rem;
          }

          .footer-card {
            background: white;
            border-radius: 24px;
            padding: 2rem;
            width: 350px;
            text-align: center;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            transform: translateY(-1rem);
            transition: transform 0.3s ease;
          }

          .footer-card:hover {
            transform: translateY(-1.5rem);
          }

          .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .card-icon {
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background: rgba(0, 196, 244, 0.1);
            padding: 12px;
          }

          .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 1rem;
          }

          .card-text {
            color: #666;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .card-button {
            background: #1a56db;
            color: white;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-weight: 500;
            transition: background-color 0.3s ease;
            display: inline-block;
            text-decoration: none;
          }

          .card-button:hover {
            background: #1e40af;
          }

          .footer-info {
            width: 75%;
            margin: 0 auto;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
          }

          .footer-text {
            color: white;
            font-size: 0.875rem;
          }

          .footer-link {
            color: white;
            text-decoration: underline;
            transition: opacity 0.2s;
          }

          .footer-link:hover {
            opacity: 0.8;
          }

          .store-buttons {
            display: flex;
            gap: 1rem;
          }

          .store-button {
            height: 32px;
            transition: opacity 0.2s;
          }

          .store-button:hover {
            opacity: 0.8;
          }

          @media (max-width: 768px) {
            .footer-info {
              flex-direction: column;
              text-align: center;
            }

            .footer-card {
              width: 100%;
              max-width: 350px;
            }
          }
        `}
      </style>

      {/* Background con olas */}
      <div className="waves-container">
        {/* Ola superior estática */}
        <div className="top-wave">
        </div>

        {/* Olas animadas */}
        <div className="animated-waves">
          <Wave
            fill="url(#gradient)"
            paused={false}
            style={{ position: 'absolute', bottom: 0, left: 0, width: '210%', height: '210%', zIndex: -1 }}
            options={{
              height: 50,
              amplitude: 40,
              speed: 0.1,
              points: 5,
            }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="120%">
                <stop offset="0%" stopColor="#5de0e6" />
                <stop offset="100%" stopColor="#004aad" />
              </linearGradient>
            </defs>
          </Wave>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        <div className="cards-grid">
          <FooterCard
            Icon={TelephoneFill}
            title="¿Necesitas ayuda?"
            content="Contacta con nuestro equipo de soporte vía WhatsApp y resolveremos todas tus dudas."
            buttonText="Contactar"
            buttonLink="https://api.whatsapp.com/send?phone=59898016289"
          />
          <FooterCard
            Icon={Calendar2CheckFill}
            title="¿Quieres tener nuestro producto en tu empresa?"
            content="Agéndate, y nos pondremos en contacto"
            buttonText="¡Lo quiero!"
            buttonLink="https://calendly.com/payflex/primer-contacto"
          />
          <FooterCard
            Icon={EnvelopeFill}
            title="Agenda una llamada con nuestro Director Comercial"
            content="¿Cuándo te viene mejor? ¡Nos adaptamos a ti!"
            buttonText="Agendar"
            buttonLink="mailto:support@payflexapp.com"
          />
        </div>

        <div className="footer-info">
          <p className="footer-text">
            PayFlex® 2024 | Cuareim 1447, Montevideo, Uruguay
          </p>
          <p className="footer-text">
            Empresa regulada y supervisada por el Banco Central del Uruguay, 
            por más información dirigirse a{' '}
            <a 
              href="https://www.bcu.gub.uy" 
              className="footer-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              www.bcu.gub.uy
            </a>
          </p>
          <div className="store-buttons">
            <img 
              src="https://chbonline.org/wp-content/uploads/2018/06/google-play-icon.png" 
              alt="Play Store" 
              className="store-button"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1200px-Download_on_the_App_Store_RGB_blk.svg.png" 
              alt="App Store" 
              className="store-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;