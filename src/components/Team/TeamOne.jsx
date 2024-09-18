import React from "react";
import img01 from "../../assets/img/team/team_img01.png";
import img02 from "../../assets/img/team/team_img02.png";
import img03 from "../../assets/img/team/team_img03.png";

import TeamOneItem from "./TeamOneItem";

const TeamOne = () => {
  const team_members = [
    {
      src: img01,
      name: "Fausto Friederich",
      designation: "Co-founder y CEO",
      social: {
        linkedin: "https://www.linkedin.com/in/faustofriedrich/",
        github: "https://github.com/faustofriederich"
      }
    },
    {
      src: img02,
      name: "Matias Bombi",
      designation: "Co-founder y CTO",
      social: {
        linkedin: "https://www.linkedin.com/in/bombi/",
        github: "https://github.com/matiasbombi"
      }
    },
    {
      src: img03,
      name: "Kevin Correa",
      designation: "Developer",
      social: {
        linkedin: "https://www.linkedin.com/in/kevin--correa/",
        github: "https://github.com/kevincorrea"
      }
    },
  ];

  return (
    <section className="team-area pt-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-70">
              <span className="sub-title">Our team</span>
              <h2 className="title">
                The Leadership <br /> <span>Team</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-xl-3 col-md-4 col-sm-6">
              <TeamOneItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOne;
