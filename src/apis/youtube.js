import axios from "axios";

const KEY = 'AIzaSyDsJ1NQiobU2nvTvlzC2S94zZ5BLA0ywkA';
 
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});