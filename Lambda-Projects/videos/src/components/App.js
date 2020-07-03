import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  // So now anytime that our component is first created it's going to have a state that videos property that starts off empty and then after a user eventually searches for something and we get back this list of videos then we'll go ahead and take that list of videos and we'll set them on our state.
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async term => {

    // first make sure that we annotate this arrow function right here as being an async function.
    // 'term': I'm going to assume that the thing is going to be called with some term search string.
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };


    // console.log(response)

    // in console : items property that is the array of videos that we want to eventually show on the screen. So we're going to take that list of videos and set them as states on our app component.
    onVideoSelect = video => {
      this.setState({ selectedVideo: video });
    };
    // make sure that we take the list of videos that are received and then set them as state on our App which allows our app component to update or render itself which is then going to allow us to render those newly fetched videos out as a list onto the screen.
  

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
        {/* whenever the App shows the VideoList,we have to give that VideoList the list of video objects that we have fetched so that the VideoList knows what to actually render on the screen. so we pass a prop caled "videos" and this is going to be a reference to the array that we fetch anytime that we call onTermSubmit. So the actual array of videos is going to be available at this.state.videos */}
        </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
