import React from "react";
import img01 from "../../assets/img/partner/cie.webp";
import img02 from "../../assets/img/partner/microsoft.webp";
import img03 from "../../assets/img/partner/bcu.webp";
import img04 from "../../assets/img/partner/ibm.webp";

const TopPartners = () => {
  const partners_list = [
    { src: img01, title: "CIE" },
    { src: img02, title: "Microsoft" },
    { src: img03, title: "BCU" },
    { src: img04, title: "IBM" },
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
              <ul className="flex flex-wrap justify-center items-center">
                {partners_list.map((item, index) => (
                  <li key={index} className="m-4">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-32 h-auto filter brightness-0 invert"
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