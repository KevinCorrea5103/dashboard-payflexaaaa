import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

const SalesTabContent = (props) => {
  return (
    <div
      className={cn("tab-pane fade", props.className)}
      id={props.id}
      role="tabpanel"
      aria-labelledby={props.ariaLabel}
    >
      <div className="chart-content-inner">
        <h2 className="title">{props.title}</h2>
        <p>{props.description}</p>
        <Link to="https://calendly.com/payflex/primer-contacto" className="btn">
          Solicitar para mi empresa
        </Link>
      </div>
    </div>
  );
};

export default SalesTabContent;
