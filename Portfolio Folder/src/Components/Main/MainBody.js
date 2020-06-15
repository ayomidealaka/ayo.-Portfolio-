import React from "react";

import classes from "./MainBody.css";
import picture from "./main-picture.png";

const MainBody = () => {
  return (
    <div className={classes.maindiv}>
      {/* <p className={classes.rotate}>🏎💨</p> */}
      <div className={classes.maindiv2}>
        <h1 className={classes.mainh1}>
          <p className={classes.rotate}>🏎💨</p>
          Hey there <span aria-label="wave">👋🏾</span>, I'm Ayomide Alaka-Yusuf,
          a developer and designer from Ireland.
        </h1>
        <p className={classes.mainP}>
          Web Developer (SASS, Vanilla Javascript, ReactJS, Node.js), Designer,
          Gamer and an advocate of Piece Of Mind 🤺.
        </p>
        <a
          href="mailto:muizzyomide@gmail.com?subject=Hi Ayomide!!"
          className={classes.button}>
          Lets Chat &rarr;
        </a>
      </div>
    </div>
  );
};

export default MainBody;
