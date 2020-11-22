import axios from "axios";

const KEY='AIzaSyBYeQ6e9HHP99E9R05lISqg5QIaXevbAms';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part:'snippet',
    type:'video',
    maxResults:5,
    key: `${KEY}`
  }
});
