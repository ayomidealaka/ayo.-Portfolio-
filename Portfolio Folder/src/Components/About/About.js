import React from "react";

import classes from "./About.css";
import picture from "./about-image.jpeg";

const About = () => {
  return (
    <div className={classes.aboutDiv}>
      <div className={classes.aboutheaderDiv}>
        <img
          className={classes.image}
          src={picture}
          alt="ayomide"
          width="450"
          height="695"
        />
        <span className={classes.aboutSideContent}>
          <h3 className={classes.abouth3}>
            Hi{" "}
            <span role="img" aria-label="Wave">
              👋🏾
            </span>
            , i'm Ayomide Alaka-Yusuf . A Nigerian Developer , Minimalist &
            Gamer.{" "}
          </h3>
          <p className={classes.aboutp}>
            Well, If im not constantly fighting for survival in the Gulag{" "}
            <span role="img" aria-label="fight">
              🔫 🤺
            </span>{" "}
            or phasing around in King's Canyon{" "}
            <span role="img" aria-label="Wave">
              🔺
            </span>
            , you would most definitely find me in front of the screen trying to
            build something to take the hassle off mankind.
          </p>

          <p className={classes.aboutp}>
            Interested in working together? Hit me up for any project or
            collaboration.
            <span className={classes.aboutInfo}>
              <span style={{ marginTop: "30px" }}>
                <a
                  href="mailto:muizzyomide@gmail.com?subject=Hi Ayomide!!"
                  className={classes.mainP2}>
                  muizzyomide@gmail.com
                </a>
              </span>
            </span>
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
