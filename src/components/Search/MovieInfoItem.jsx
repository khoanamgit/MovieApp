import React, { useState } from "react";
import classes from "./MovieInfoItem.module.css";

import { FaListUl, FaHeart, FaBookmark, FaStar } from "react-icons/fa";
import RenderTrailer from "../RenderTrailer/RenderTrailer";

function MovieInfoItem({ movies }) {
  const [trailer, setTrailer] = useState(false);
  const convertToTime = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h${minutes}m`;
  };

  const handleTrailer = () => {
    setTrailer(!trailer);
  };

  return (
    <>
      {/* {!movies && <p>Movie not found</p>} */}
      {movies && (
        <>
          <div className={classes.info}>
            <img
              className={classes.img}
              src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
              alt={movies.title}
            />
            <div className={classes["movie-info"]}>
              <h3 className={classes["info-title"]}>{movies.title}</h3>
              <div className={classes["info-facts"]}>
                <span className={classes["release"]}>
                  {movies.release_date}
                </span>
                <span className={classes["genres"]}>
                  {movies.genres[0].name},{movies.genres[1].name}
                </span>
                <span className={classes["time"]}>
                  {convertToTime(movies.runtime)}
                </span>
              </div>
              <ul className={classes["auto-action"]}>
                <li className={classes["action-item"]}>
                  <FaListUl className={classes.icon} />
                </li>
                <li className={classes["action-item"]}>
                  <FaHeart className={classes.icon} />
                </li>
                <li className={classes["action-item"]}>
                  <FaBookmark className={classes.icon} />
                </li>
                <li className={classes["action-item"]}>
                  <FaStar className={classes.icon} />
                </li>
                <li>
                  <button
                    onClick={handleTrailer}
                    className={`${classes["action-btn"]}`}
                  >
                    Offical Trailer
                  </button>
                </li>
              </ul>
              <div className={classes["header-info"]}>
                <h3 className={classes["tag-line"]}>{movies.tagline}</h3>
                <h2 className={classes["auto"]}>Overview</h2>
                <div className={classes["overview"]}>{movies.overview}</div>
                <div className={classes["production-comp"]}>
                  Production by: {movies?.production_companies[0].name}
                </div>
              </div>
            </div>
          </div>
          {trailer && (
            <div className={classes.trailer}>
              <RenderTrailer trailer={movies.videos} />
            </div>
          )}{" "}
        </>
      )}
    </>
  );
}

export default MovieInfoItem;
