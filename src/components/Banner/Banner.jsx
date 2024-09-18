import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";

import shape03 from "../../assets/img/banner/banner_shape03.png";

import CountDownOne from "../CountDown/CountDownOne";

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
      
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">

              <h2 className="title" style={{ color: "white" }}>
              Transformar la gestión salarial de tu empresa <span>Cambia Vidas</span> 
              </h2>
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>Sin deudas</li>
                <li>Beneficios</li>
                <li>libertad financiera</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title" style={{ color: "white" }}>
                -65% rotatividad 
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">



            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
