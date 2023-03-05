import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MovieSearch from "./MovieSearch";
import classes from "./Search.module.css";
function Search(props) {
  const key = "ebf5fb39a4ea7ce9abc083c294ef1bf6";
  const [inputSearch, setInputSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${inputSearch}`
        )
        .then((response) => {
          setMovies(response.data.results);
        });
    } catch (error) {
      alert("Something went wrong!");
    }
  }, [inputSearch]);

  const submitHandler = (e) => {
    e.preventDefault();

    setInputSearch(inputRef.current.value);
    
    inputRef.current.value = "";
  };
  // console.log(movies)

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <input
          className={classes.input}
          ref={inputRef}
          type="text"
          placeholder="Search film..."
        />
        <button className={classes.btn}>Search</button>
      </form>

      <div className={classes["listItem-search"]}>
        {movies.map((movie, index) => (
          <MovieSearch key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Search;
<h1>Search</h1>;
