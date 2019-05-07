// need to add a way for users to add, get and delete the videos they have

import {
  ADD_LIKED_VIDEO,
  FETCH_USER_VIDEO,
  DELETE_USER_VIDEO
} from "../actions/userVideos";

let videos = JSON.parse(sessionStorage.getItem('videos'));
const initialState = videos ? { videos } : {};

