import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import axios from "axios";
import Modal from "react-modal";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import RenderTrailer from "../RenderTrailer/RenderTrailer";
function Modal1(props) {
  const { movie } = props;
  const key = "ebf5fb39a4ea7ce9abc083c294ef1bf6";

  const [video, setVideo] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${key}&append_to_response=videos`
      )
      .then((response) => {
        setVideo(response.data);
      });
  }, [movie?.id]);
  console.log(video);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#111";
  }

  function closeModal() {
    setIsOpen(false);
  }

//   const truncatedString = (str, maxLength) => {
//     if (str && str.length > maxLength) {
//       return str.slice(0, maxLength) + "...";
//     } else {
//       return str;
//     }
//   };

  const convertToTime = (num) => {
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    return `${hours}h${minutes}m`;
  };

  return (
    <div>
      <button
        className={`${classes["btn"]} ${classes["open-modal"]}`}
        onClick={openModal}
      >
        <div className={classes["test"]}>
          <FaInfoCircle />
          <span>More Info</span>
        </div>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
        className={classes["modal-test"]}
      >
        <div className={classes["modal-content"]}>
          <div className={classes["modal-header"]}>
            {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
            <button className={classes["btn-closes"]} onClick={closeModal}>
              X
            </button>
          </div>
          <img
            className={classes["img-movie"]}
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          {/* <div className={classes["img-movie"]}>
            <RenderTrailer trailer={video.data.videos} />
          </div> */}
          <div className={classes["movie-desc"]}>
            <h1 className={classes["movie-title"]}>{movie?.title}</h1>
            <p className={classes.releaseDay}>
              Released: {movie?.release_date}
            </p>
          </div>
          <div className="movie-info">
            <div className="country">
              {video && video?.production_countries[0].name}
            </div>
            <div className="time">{video && convertToTime(video.runtime)}</div>
          </div>
          <div className="movie-overview">
            {video?.overview}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Modal1;
