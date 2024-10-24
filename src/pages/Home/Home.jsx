import React from "react";
import Banner from "../../components/Banner/Banner";
import ContactOne from "../../components/Contact/ContactOne";
import Footer from "../../components/Footer/index.tsx";
import Sales from "../../components/Sales/Sales";
import TopPartners from "../../components/TopPartners/TopPartners";

import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "../../layouts/LayoutOne";
import Clients from "../../components/Clients/index.tsx";

const Home = () => {
  return (
    <LayoutOne>
      <main className="fix">
        <Banner />
        <Clients />
        <WhoWeAre />
        <TopPartners />
        <WhyChooseUs />
        <Sales />

        <div className="area-bg">
    

        </div>

      
        <ContactOne />
      </main>
    </LayoutOne>
  );
};

export default Home;
