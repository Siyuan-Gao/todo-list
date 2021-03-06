import axios from "axios";

const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';
// created this as a capitalized variable KEY because this specifically says this is a constant value and it should not be changed unless you really know what you're doing.

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
  // params is going to contain all the different queery string parameters that we want to have added onto the request
  part: 'snippet',
    maxResults: 5,
    key: KEY
  // have to depend on our API key to this request as well inside the query string. whenever we make our final request we have to throw our API key into a query string on URL. 
}
});