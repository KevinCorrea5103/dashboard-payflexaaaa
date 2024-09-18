import React from "react";

const TeamOneItem = (props) => {
  return (
    <div className="team-item">
      <div className="team-thumb">
        <img src={props.item.src} alt={props.item.name} />
      </div>
      <div className="team-content">
        <h2 className="title">{props.item.name}</h2>
        <span>{props.item.designation}</span>

        <ul className="team-social">
          <li>
            <a href={props.item.social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href={props.item.social.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamOneItem;
