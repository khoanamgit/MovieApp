import React, { useEffect, useState } from "react";

import Hero from "../Hero/Hero";
import axios from "axios";
import requests from "../../Request";
import MovieList from "../MovieList/MovieList";
import classes from "./Main.module.css"
function Main(props) {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.trunc(Math.random() * movies.length)];
  useEffect(() => {
    axios.get(requests.requestNowplaying).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className={classes.main}>
      <Hero movie={movie} />
      <MovieList requestUrl={requests.requestPopular} title={"Popular"} />
      <MovieList requestUrl={requests.requestTopRated} title={"Top Rated"} />
      <MovieList requestUrl={requests.requestNowplaying} title={"Up Comming"} />
      <MovieList requestUrl={requests.requestTrending} title={"Trending"} />
    </div>
  );
}

export default Main;
