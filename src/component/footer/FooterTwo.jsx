import React from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialShare = [
  {
    Social: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/andrewrametta/",
  },
  { Social: <FaGithub />, link: "https://github.com/andrewrametta" },
  { Social: <FaEnvelope />, link: "mailto:ramettaandrewj@gmail.com" },
];

const FooterTwo = () => {
  return (
    <div className="footer-style-2 ptb--30 bg_color--6">
      <div className="wrapper plr--50 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div className="logo text-center text-sm-left mb_sm--20">
                <a href="/home-one">
                  <img
                    src="/assets/images/logo/logo-light.png"
                    alt="Logo images"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${val.link}`}
                    >
                      {val.Social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterTwo;
