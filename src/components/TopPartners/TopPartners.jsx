import React from "react";
import img01 from "../../assets/img/partner/cie.webp";
import img02 from "../../assets/img/partner/microsoft.webp";
import img03 from "../../assets/img/partner/bcu.webp";
import img04 from "../../assets/img/partner/ibm.webp";
import img05 from "../../assets/img/partner/ande.png";



const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "CIE" },
    { src: img02, title: "Microsoft" },
    { src: img03, title: "BCU" },
    { src: img04, title: "IBM" },
    { src: img05, title: "ANDE" },
  ];

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">Partners</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px', // Añade espacio entre los elementos
                padding: '-10',
                listStyle: 'none'
              }}>
                {partners_list.map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '220px', // Ancho fijo para cada elemento
                    height: '100px' // Altura fija para cada elemento
                  }}>
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: item.title === "IBM" ? "100px" : "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain", // Asegura que la imagen se ajuste dentro del contenedor
                        transition: "0.3s linear",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartners;