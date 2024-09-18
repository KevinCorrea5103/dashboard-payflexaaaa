import React from "react";
import img01 from "../../assets/img/images/phone.gif";
import img02 from "../../assets/img/images/about_img02.png";
import { Link } from "react-router-dom";

const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="" className="img-one" /> {/* Clase añadida */}

            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">Quienes somos?</span>
                <h2 className="title">
                  La plataforma <span> Nº1 </span>En libertad financiera
                </h2>
              </div>
              <p>
                Ofrecemos la herramienta más innovadora en bienestar financiero para tus empleados. Permite que accedan a su sueldo ganado en tiempo real, potenciando su felicidad y productividad. Únete a la revolución de la retribución flexible.
              </p>
              <Link to="/" className="btn">
                Purchase Tokens
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
