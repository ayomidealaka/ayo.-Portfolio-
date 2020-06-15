import React from "react";
import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.css";

const Navbar = () => {
  return (
    <div className={classes.navdiv}>
      <h3 className={classes.navh3}>
        <Link to="/" className={classes.link}>
          ayo.
        </Link>
      </h3>
      <ul className={classes.navul}>
        <li className={classes.resume}>
          <a href="https://drive.google.com/file/d/1XpsD2K87_srI39NOhWkKeTfuyxNZKksl/view?usp=sharing">
            resume
          </a>
        </li>
        <li className={classes.navli2}>
          <NavLink activeStyle={{}} to="/projects" className={classes.link}>
            projects
          </NavLink>
        </li>
        <li className={classes.navli2}>
          <a
            href="mailto:muizzyomide@gmail.com?subject=Hi Ayomide!!"
            className={classes.link}>
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
