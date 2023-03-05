import React from "react";
import { Link } from "react-router-dom";
import classes from "./MovieSearch.module.css";
function MovieSearch({ movie }) {
  const handleClick = () => {};

  return (
    <div onClick={handleClick} className={classes.test}>
      <Link to={`/info/${movie.id}`}>
        <img
          className={classes["search-img"]}
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.original_title}
        />

        <div className={classes["movie-desc"]}>
          <p className={classes["movie-title"]}>{movie.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default MovieSearch;
