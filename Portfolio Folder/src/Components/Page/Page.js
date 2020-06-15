import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import classes from "./Page.css";

import Navbar from "../Navbar/Navbar";
import MainBody from "../Main/MainBody";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import About from "../About/About";

class Page extends Component {
  render() {
    return (
      <div className={classes.Page}>
        <Navbar />
        <Switch>
          <Route path="/" component={MainBody} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/about" component={About} exact />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Page;
