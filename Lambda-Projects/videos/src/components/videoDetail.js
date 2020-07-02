import React from "react";
import Spinner from "./spinner";

export default function VideoDetail({ video }) {
  if (!video) {
    return (
      <div>
        please generate api on youtube developer tools then call
        <br />
        <Spinner />
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video-player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}