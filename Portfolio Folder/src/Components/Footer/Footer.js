import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Footer.css";

const Footer = () => {
  return (
    <div className={classes.footerdiv}>
      <h3 className={classes.footerh3}>Stay Safe Always.❤️ </h3>
      <ul className={classes.footerul}>
        <li>
          <a href="https://github.com/ayomidealaka">github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ayomidealaka-yusuf/">linkedIn</a>
        </li>
        <li className={classes.dribble}>
          <a href="https://dribbble.com/AyomideAlaka">dribbble</a>
        </li>
        <li>
          <NavLink activeStyle={{}} to="/about">
            about
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
