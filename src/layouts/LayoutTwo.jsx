import React from "react";
import PageLoader from "../components/PageLoader/PageLoader";
import cn from "classnames";
import HeaderTwo from "../components/Header/HeaderTwo";


const LayoutTwo = (props) => {
  return (
    <div className={cn("white-background")}>
      <PageLoader />

      <HeaderTwo />

      {props.children}


    </div>
  );
};

export default LayoutTwo;
