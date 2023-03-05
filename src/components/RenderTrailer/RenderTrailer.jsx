import React from "react";
import Youtube from "react-youtube";
function RenderTrailer({ trailer }) {
  const trailerTest = trailer.results.find(
    (vid) => vid.name === "Official Trailer"
  );
  // console.log(trailerTest)
  return (
    <Youtube
      opts={{ playerVars: { autoplay: 1 } }}
      videoId={trailerTest?.key}
    />
  );
}

export default RenderTrailer;
