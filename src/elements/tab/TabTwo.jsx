import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaNodeJs,
  FaNode,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiGit,
  SiVisualstudiocode,
  SiJquery,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { CgDatabase } from "react-icons/cg";
import { ImNpm } from "react-icons/im";

class TabsTwo extends Component {
  render() {
    let tab1 = "Front-End",
      tab2 = "Back-End",
      tab3 = "Tools";

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
                      <div className="single-progress">
                        <h6 className="title">
                          <SiJquery size={32} /> jQuery
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="single-progress">
                        <h6 className="title">
                          <FaNodeJs size={32} /> Node.js
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <FaNode size={32} /> Express
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <SiPostgresql size={32} /> PostgreSQL
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <CgDatabase size={32} /> SQL
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <div className="single-progress">
                        <h6 className="title">
                          <SiGit size={32} /> Git
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <SiVisualstudiocode size={32} /> VS Code
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <ImNpm size={32} /> Node Package Manager
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <SiPostman size={32} /> Postman
                        </h6>
                      </div>
                      <div className="single-progress">
                        <h6 className="title">
                          <SiHeroku size={32} /> Heroku
                        </h6>
                      </div>
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
