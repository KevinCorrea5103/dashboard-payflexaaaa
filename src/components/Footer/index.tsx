import React from 'react';
import Wave from 'react-wavify';

const Card = ({ title, content, buttonText, buttonLink, logoSrc, alt }) => {
  return (
    <div className="bg-white shadow-lg rounded-3xl p-9 w-80 mb-8 mx-4 mt-[-1.5rem] text-center">
      <div className="mt-6 flex flex-col items-center">
        <div className="mb-4">
          <img src={logoSrc} alt={alt} width={50} height={50} />
        </div>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {content && <p className="text-center">{content}</p>}
        <a
          href={buttonLink}
          className="button-link bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-5 rounded-full mt-4 z-10"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp dark:bg-gray-dark relative z-10 pt-16 md:pt-20 lg:pt-60"
      style={{ backgroundColor: '#f0f2fa', paddingBottom: '70px' }}
    >
      <div className="container relative">
        {/* Contenido del footer */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap justify-center md:justify-center">
            <Card
              title="¿Necesitas ayuda?"
              content="Contacta con nuestro equipo de soporte vía WhatsApp y resolveremos todas tus dudas."
              buttonText="Contactar"
              buttonLink="https://api.whatsapp.com/send?phone=59898016289"
              logoSrc="/images/footer/logo1.png"
              alt="Logo 1"
            />
            <Card
              title="¿Quieres tener nuestro producto en tu empresa?"
              content="Agéndate, y nos pondremos en contacto"
              buttonText="¡Lo quiero!"
              buttonLink="https://calendly.com/payflex/primer-contacto"
              logoSrc="/images/footer/logo2.png"
              alt="Logo 2"
            />
            <Card
              title="Agenda una llamada con nuestro Director Comercial"
              content="¿Cuándo te viene mejor? ¡Nos adaptamos a ti!"
              buttonText="Agendar"
              buttonLink="mailto:support@payflexapp.com"
              logoSrc="/images/footer/logo3.png"
              alt="Logo 3"
            />
          </div>
          <br />
        </div>

        <hr className="w-3/4 border-t border-white my-5 mx-auto" />

        <div className="w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center mt-2 mb-5 space-y-4 md:space-y-0">
          <p className="text-white dark:text-white text-center md:text-left">
            PayFlex® 2024 | Cuareim 1447, Montevideo, Uruguay
          </p>
          <p className="text-white dark:text-white text-center md:text-left">
            Empresa regulada y supervisada por el Banco Central del Uruguay, por más información dirigirse a{' '}
            <a href="https://www.bcu.gub.uy" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:underline">
              www.bcu.gub.uy
            </a>
          </p>
          <div className="flex space-x-4 items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.anonymous.blank"
              target="_blank"
              className="mx-2"
              rel="noreferrer"
            >
              <img
                src="https://cdnroute.bpsgameserver.com/echo-cdn-origin/content/betssonmx/sites/11/2023/07/google-play-badge-1.png"
                alt="Download on Google Play"
                width={162}
                height={48}
                style={{ marginBottom: '-5px' }}
              />
            </a>
            <a
              href="https://apps.apple.com/app/apple-store/idxxxxxxxxx"
              target="_blank"
              className="mx-2"
              rel="noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                width={145}
                height={48}
                style={{ marginBottom: '-5px' }}
              />
            </a>
          </div>
        </div>
      </div>

      <Wave
        fill="url(#gradient)"
        paused={false}
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
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
    </footer>
  );
};

export default Footer;
