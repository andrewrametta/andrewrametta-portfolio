// React Required
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create Import File
import "./index.scss";

// Home layout
import PortfolioLanding from "./home/PortfolioLanding";

// Dark Home Layout
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

// Blocks Layout

import Portfolio from "./blocks/Portfolio";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import Columns from "./blocks/Columns";
import Button from "./blocks/Button";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={DarkPortfolioLanding}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-landing`}
            component={PortfolioLanding}
          />

          {/* Element Layot */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            component={Service}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details`}
            component={ServiceDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio-details`}
            component={PortfolioDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog`}
            component={Blog}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details`}
            component={BlogDetails}
          />

          {/* Blocks Elements  */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/button`}
            component={Button}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/portfolio`}
            component={Portfolio}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/progressbar`}
            component={ProgressBar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-form`}
            component={ContactForm}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/columns`}
            component={Columns}
          />

          <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
          <Route component={error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
