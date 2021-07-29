import React, { Component } from "react";
import { FaEye, FaGithubSquare } from "react-icons/fa";

const ServiceList = [
  {
    icon: (
      <img src="/assets/images/portfolio/portfolio-1.png" alt="PayitForward" />
    ),
    title: "PostgreSQL, Express, React(Hooks), Node",
    description:
      "Fullstack web application donation based platform that connects donors to local nonprofits.",
    buttonText1: "Live Demo",
    buttonLink1: "https://pay-it-forward.vercel.app/login",
    buttonText2: "GitHub Repo",
    buttonLink2: "https://github.com/andrewrametta/pay-it-forward",
  },
  {
    icon: (
      <img
        src="/assets/images/portfolio/dailygratitude.png"
        alt="Daily Gratitude"
      />
    ),
    title: "PostgreSQL, Express, React, Node",
    description:
      "Fullstack web application gratitude journal where users can log their entries.",
    buttonText1: "  Live Demo",
    buttonLink1: "https://daily-gratitude-app-andrewrametta.vercel.app/",
    buttonText2: "GitHub Repo",
    buttonLink2: "https://github.com/andrewrametta/daily-gratitude-app",
  },
  {
    icon: (
      <img
        src="/assets/images/portfolio/quarantinedatenight.png"
        alt="Quarantine Date Night"
      />
    ),
    title: "HTML, CSS, JavaScript, jQuery, and RESTful APIs",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
    buttonText1: "Live Demo",
    buttonLink1: "https://andrewrametta.github.io/quarantine-date-night/",
    buttonText2: "GitHub Repo",
    buttonLink2: "https://github.com/andrewrametta/quarantine-date-night",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row service-main-wrapper">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <div className="service service__style--2 text-left bg-gray">
                <div className="icon">{val.icon}</div>
                <br />
                <div className="content">
                  {val.buttonText1 ? (
                    <div className="slide-btn">
                      <a
                        className="btn-default"
                        target="_blank"
                        href={`${val.buttonLink1}`}
                      >
                        <FaEye size="22" style={{ marginRight: ".5rem" }} />
                        {"     "}
                        {val.buttonText1}
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <br />
                  {val.buttonText2 ? (
                    <div className="slide-btn">
                      <a
                        className="btn-default"
                        target="_blank"
                        href={`${val.buttonLink2}`}
                      >
                        <FaGithubSquare
                          size="24"
                          style={{ marginRight: ".5rem" }}
                        />
                        {val.buttonText2}
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  <br />
                  <h3 className="title">{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
