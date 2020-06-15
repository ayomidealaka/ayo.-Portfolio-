import React from "react";

import classes from "./Projects.css";

const Projects = () => {
  return (
    <div className={classes.projectMainDiv}>
      <h2 className={classes.projecth2}>
        Projects{" "}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <div className={classes.projectDiv}>
        <h3>
          <a href="https://theweather.now.sh/" className={classes.projecth3}>
            the.weather.{" "}
            <span role="img" aria-label="cloud">
              ⛅️☀️
            </span>
          </a>
        </h3>
        <p className={classes.projectpDetails}>
          A weather App that fetches and displays very detailed weather data
          from Open Weather Map API.
        </p>
        <p className={classes.projectp}>
          HTML5, CSS3, Vanilla JS, OpenWeather API.
        </p>
        <p className={classes.link}>
          <a href="https://github.com/ayomidealaka/the.weather">Github</a>
        </p>
      </div>

      <div className={classes.projectDiv}>
        <h3>
          <a href="https://timerrr.now.sh" className={classes.projecth3}>
            Timerrr ⏲
          </a>
        </h3>
        <p className={classes.projectpDetails}>
          Browser based Timer/Stopwatch app that counts from a specified time to
          0 and alerts the user with an annoying beep when complete. Helps user
          set time lapses for screen breaks etc. Built to reduce the hassle of
          using phone or PC timers.
        </p>
        <p className={classes.projectp}>HTML5, CSS3, Vanilla JS.</p>
        <p className={classes.link}>
          <a href="https://github.com/ayomidealaka/Timerrr">Github</a>
        </p>
      </div>

      <div className={classes.projectDiv}>
        <h3>
          <a
            href="https://github.com/ayomidealaka/Music-Player-Application"
            className={classes.projecth3}>
            BlastBox 🎧
          </a>
        </h3>
        <p className={classes.projectpDetails}>
          BlastBox is a GUI Music Player application which allows users play
          .mp3 files from local directory, create, save and manage multiple
          music playlists.
        </p>
        <p className={classes.projectp}>Java, JavaFX</p>
        <p className={classes.link}>
          <a href="https://github.com/ayomidealaka/Music-Player-Application">
            Github
          </a>
        </p>
      </div>

      <div className={classes.projectDiv}>
        <h3>
          <a
            href="https://github.com/ayomidealaka/JDBC-movieRental"
            className={classes.projecth3}>
            JDBC Movie Rental 🎬🍿
          </a>
        </h3>
        <p className={classes.projectpDetails}>
          A Java JDBC CLI based movie rental application that utilizes Mysql
          server for managing movies, users and rental database. It enables
          users make rental orders whilst keeping accurate rental records.
        </p>
        <p className={classes.projectp}>Java, Java JDBC, MySQL</p>
        <p className={classes.link}>
          <a href="https://github.com/ayomidealaka/JDBC-movieRental">Github</a>
        </p>
      </div>
    </div>
  );
};

export default Projects;
