import React from "react";
import Footer from "../components/Footer/index.tsx";
import HeaderOne from "../components/Header/HeaderOne";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";

const LayoutOne = (props) => {
  return (
    <div className={cn("")}>
      <PageLoader />

      <HeaderOne />

      {props.children}

      <Footer />
    </div>
  );
};

export default LayoutOne;
