import React from "react";
import { FaPlay } from "react-icons/fa";
import Modal1 from "../Modal/Modal";

import classes from "./Hero.module.css";
function Hero({ movie }) {
  const truncatedString = (str, maxLength) => {
    if (str && str.length > maxLength) {
      return str.slice(0, maxLength) + "...";
    } else {
      return str;
    }
  };

  const openModalHandler = () => {};

  return (
    <div className={classes.content}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className={classes["movie-des"]}>
        <h3 className={classes["movie-title"]}>{movie?.title}</h3>
        <p className={classes["movie-overview"]}>
          {truncatedString(movie?.overview, 100)}
        </p>
        <p className={classes.releaseDay}>Released: {movie?.release_date}</p>
        <div className={classes["movie-btn"]}>
          <button className={`${classes.btn} ${classes["btn-play"]}`}>
            <div className={classes.test}>
              <FaPlay />
              <span>Play</span>
            </div>
          </button>
          <div>
            <div onClick={openModalHandler} className={classes.test}>
              <span>
                <Modal1 movie={movie}/>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
