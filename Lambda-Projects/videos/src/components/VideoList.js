import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) =>{
   {/* this 'video' is an array pass from the App  and we're going to map over it. */}
  const renderedList = videos.map((video)=>{
    // renderedList is going to be the result of mapping over the videos array 
    // This inner function will be called one time for every object inside the videos.
    return<VideoItem onVideoSelect={onVideoSelect} video={video}/>;
    // we can customize each of those components by taking the video that we are mapping over and passing it as a prop down into the VideoItem.
  }); 

return<div className="ui relaxed divided list">{renderedList}</div>

}

export default VideoList;