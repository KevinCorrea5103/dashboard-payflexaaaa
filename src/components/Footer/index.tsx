import React from 'react';
import Wave from 'react-wavify';

const FooterCard = ({ title, content, buttonText, buttonLink, logoSrc, alt }) => {
  return (
    <div className="footer-card bg-white shadow-lg rounded-3xl p-9 w-80 mb-8 mx-4 mt-[-1.5rem] text-center relative">
      <div className="footer-card-content mt-6 flex flex-col items-center">
        <div className="footer-card-logo mb-4">
          <img src={logoSrc} alt={alt} width={50} height={50} />
        </div>
        <h2 className="footer-card-title text-lg font-bold mb-4">{title}</h2>
        {content && <p className="footer-card-text text-center">{content}</p>}
        <a
          href={buttonLink}
          className="footer-card-button bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-full mt-4 z-10 inline-block"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="payflex-footer relative z-10">
      <style>
        {`
          .payflex-footer {
            background-color: #f0f2fa;
            padding: 4rem 0 70px;
            position: relative;
            overflow: hidden;
          }
          
          .footer-content {
            position: relative;
            z-index: 2;
          }
          
          .footer-card {
            isolation: isolate;
          }
          
          .footer-wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }
          
          .footer-divider {
            border-color: rgba(255, 255, 255, 0.2);
          }
          
          .footer-info {
            color: #fff;
            position: relative;
            z-index: 2;
          }
          
          .footer-store-badge {
            transition: opacity 0.2s;
          }
          
          .footer-store-badge:hover {
            opacity: 0.8;
          }
        `}
      </style>

      <div className="footer-content container relative">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center md:justify-center">
            <FooterCard
              title="¿Necesitas ayuda?"
              content="Contacta con nuestro equipo de soporte vía WhatsApp y resolveremos todas tus dudas."
              buttonText="Contactar"
              buttonLink="https://api.whatsapp.com/send?phone=59898016289"
              logoSrc="/images/footer/logo1.png"
              alt="Logo 1"
            />
            <FooterCard
              title="¿Quieres tener nuestro producto en tu empresa?"
              content="Agéndate, y nos pondremos en contacto"
              buttonText="¡Lo quiero!"
              buttonLink="https://calendly.com/payflex/primer-contacto"
              logoSrc="/images/footer/logo2.png"
              alt="Logo 2"
            />
            <FooterCard
              title="Agenda una llamada con nuestro Director Comercial"
              content="¿Cuándo te viene mejor? ¡Nos adaptamos a ti!"
              buttonText="Agendar"
              buttonLink="mailto:support@payflexapp.com"
              logoSrc="/images/footer/logo3.png"
              alt="Logo 3"
            />
          </div>
        </div>

        <hr className="footer-divider w-3/4 my-5 mx-auto" />

        <div className="footer-info w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center mt-2 mb-5 space-y-4 md:space-y-0">
          <p className="text-center md:text-left">
            PayFlex® 2024 | Cuareim 1447, Montevideo, Uruguay
          </p>
          <p className="text-center md:text-left">
            Empresa regulada y supervisada por el Banco Central del Uruguay, por más información dirigirse a{' '}
            <a href="https://www.bcu.gub.uy" target="_blank" rel="noopener noreferrer" className="hover:underline">
              www.bcu.gub.uy
            </a>
          </p>
          <div className="flex space-x-4 items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.blank"
              target="_blank"
              className="footer-store-badge mx-2"
              rel="noreferrer"
            >
              <img
                src="/api/placeholder/162/48"
                alt="Download on Google Play"
                width={162}
                height={48}
                style={{ marginBottom: '-5px' }}
              />
            </a>
            <a
              href="https://apps.apple.com/app/apple-store/idxxxxxxxxx"
              target="_blank"
              className="footer-store-badge mx-2"
              rel="noreferrer"
            >
              <img
                src="/api/placeholder/145/48"
                alt="Download on the App Store"
                width={145}
                height={48}
                style={{ marginBottom: '-5px' }}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-wave">
        <Wave
          fill="url(#gradient)"
          paused={false}
          options={{
            height: 70,
            amplitude: 60,
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
    </footer>
  );
};

export default Footer;