import React from 'react';
import RenderTrailer from '../RenderTrailer/RenderTrailer';


import classes from './MoiveDesc.module.css'

function MovieDesc({movies}) {
    // console.log(movies)
    return (
        <div className={classes["movieDesc"]}>
            <div className={classes["movieDesc-content"]}>
                <h3 className={classes["movieHeading"]}>{movies.data.original_title}</h3>
                <p className={classes["movieRelease"]}>Release date: {movies.data.release_date}</p>
                <p className={classes["movieVote"]}>Voted: {movies.data.vote_average}</p>
                <p className={classes["movieOverview"]}>{movies.data.overview}</p>
            </div>
            <div className={classes["movieDesc-trailer"]}>
                <RenderTrailer trailer={movies.data.videos} />
            </div>
        </div>
    );
}

export default MovieDesc;