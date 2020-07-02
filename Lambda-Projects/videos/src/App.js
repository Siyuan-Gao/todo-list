import React , { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./API/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/videoDetail"; 

class App extends React.Component{
  // So now anytime that our component is first created it's going to have a state that videos property that starts off empty and then after a user eventually searches for something and we get back this list of videos then we'll go ahead and take that list of videos and we'll set them on our state.
    state={videos:[],seletedVideo: null};
  // first make sure that we annotate this arrow function right here as being an async function.
   onTermSubmit = async term=>{
    // 'term': I'm going to assume that the thing is going to be called with some term search string.
    const response = await youtube.get("/search",{
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
        }
      });

      onVideoSelect =(video)=>{
        console.log('From the App', video)
      }
      // console.log(response)

      // in console : items property that is the array of videos that we want to eventually show on the screen. So we're going to take that list of videos and set them as states on our app component.
        this.setState({videos: response.data.items });
  // make sure that we take the list of videos that are received and then set them as state on our App which allows our app component to update or render itself which is then going to allow us to render those newly fetched videos out as a list onto the screen.

    }

  render() {
    return(<div className="ui container">
      <SearchBar callMeWhenSubmitte={this.onTermSubmit} />
      <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      {/* whenever the App shows the VideoList,we have to give that VideoList the list of video objects that we have fetched so that the VideoList knows what to actually render on the screen. so we pass a prop caled "videos" and this is going to be a reference to the array that we fetch anytime that we call onTermSubmit. So the actual array of videos is going to be available at this.state.videos */}
      
        I have {this.state.videos.length} videos.
      </div>

    );
}
};
export default App;
