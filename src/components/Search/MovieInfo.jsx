import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieInfoItem from "./MovieInfoItem";

function MovieInfo(props) {
  const key = "ebf5fb39a4ea7ce9abc083c294ef1bf6";
  const params = useParams();
  const id = params.id;
  // const [isLoading, setIsLoading] = useState(false)
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&append_to_response=videos`;

  const [movies, setMovies] = useState(null);
  useEffect(() => {
    // setIsLoading(true)
    try {
      const fetchApi = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      };
      fetchApi();
      // setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return (
    <>
      {!movies && <p style={{color: "#fff", fontSize: "30px", textAlign: "center"}}>Loading....</p>}
      {movies && <MovieInfoItem movies={movies} />}
    </>
  );
}

export default MovieInfo;
