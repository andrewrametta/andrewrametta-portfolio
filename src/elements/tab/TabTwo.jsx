import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProgressBar } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaNodeJs,
} from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

class TabsTwo extends Component {
  render() {
    let tab1 = "Front-End",
      tab2 = "Back-End",
      tab3 = "Tools",
      tab4 = "Other";

    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                    <Tab>{tab4}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="single-progress">
                        <h6 className="title">
                          <FaReact size={32} /> React
                        </h6>
                      </div>

                      <div className="single-progress">
                        <h6 className="title">
                          <FaHtml5 size={32} /> HTML5
                        </h6>
                      </div>

                      <div className="single-progress">
                        <h6 className="title">
                          <FaCss3 size={32} /> CSS3
                        </h6>
                      </div>

                      <div className="single-progress">
                        <h6 className="title">
                          <FaJsSquare size={32} /> JavaScript
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="single-progress">
                        <h6 className="title">
                          <FaNodeJs /> Node.js
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <FaReact /> Express
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <SiPostgresql /> PostgreSQL
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <AiOutlineConsoleSql /> SQL
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            BSc In CSE
                            <span> - ABC University, Los Angeles, CA</span>
                          </a>{" "}
                          2010
                        </li>
                        <li>
                          <a href="/service">
                            Diploma in Computer Science
                            <span> - Gamma Technical Institute</span>
                          </a>{" "}
                          2009
                        </li>
                        <li>
                          <a href="/service">
                            Graphic Designer
                            <span> - ABC Institute, Los Angeles, CA</span>
                          </a>{" "}
                          2007
                        </li>
                        <li>
                          <a href="/service">
                            Graphic Designer
                            <span> - ABC Institute, Los Angeles, CA</span>
                          </a>{" "}
                          2007
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
