import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import MovieDesc from "./MovieDesc";
import useHttps from "../../use-https";

import classes from "./MovieList.module.css";

function MovieList({ title, requestUrl }) {
  const key = "ebf5fb39a4ea7ce9abc083c294ef1bf6";

  const [movies, setMoives] = useState([]);
  const [id, setId] = useState(505642);
  const [view, setView] = useState(false);
  useEffect(() => {
    axios.get(requestUrl).then((response) => {
      setMoives(response.data.results);
    });
  }, [requestUrl]);

  const getMovie = (id, view) => {
    setId(id);
    setView(!view);
  };
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`;
  const moviesVideo = useHttps(url);
  // console.log(moviesVideo)
  return (
    <div className={classes["movieList-main"]}>
      <h3 className={classes.movieTitle}>{title}</h3>
      <div className={classes.movieList}>
        {movies.map((movie, index) => (
          <MovieItem onGetMoive={getMovie} key={index} movie={movie} />
        ))}
      </div>
      {view && <MovieDesc movies={moviesVideo} />}
    </div>
  );
}

export default MovieList;
