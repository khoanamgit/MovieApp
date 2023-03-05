import { FaHeart, FaRegHeart } from "react-icons/fa";
import React, { useState } from "react";

import classes from "./MovieItem.module.css";


function MovieItem({ movie, onGetMoive }) {
  const [like, setLike] = useState(false)
  const [id, setId] = useState(null);
  const [view, setView] = useState(false);
  const ClickMovieHandler = () => {
    setId(movie.id);
    setView(!view);
    onGetMoive(id, view);
  };


  const likeHandler = () => {
    setLike(!like)
  }

  return (
    <>
      <div
        onClick={ClickMovieHandler}
        className={classes.movieItem}
        id={movie.id}
      >
        <img
          className={classes["movieList-img"]}
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.id}
        />
        <div className={classes["movieList-desc"]}>
          <p className={classes["movieList-title"]}>{movie?.title}</p>
          <p onClick={likeHandler} className={classes["movieList-heart"]}>
            {!like ?  <FaRegHeart /> : <FaHeart />}
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieItem;
