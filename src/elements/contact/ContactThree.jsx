import React, { Component } from "react";
import { FaEnvelope } from "react-icons/fa";

class ContactThree extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center mb--30 mb_sm--0">
                <span className="subtitle">Want to Connect</span>
                <h2 className="title">Send me a message!</h2>
                <a href="mailto:ramettaandrewj@gmail.com">
                  <FaEnvelope size={100} color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactThree;
