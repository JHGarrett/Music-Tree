// need to add a way for users to add, get and delete the videos they have

import {
  ADD_USER_VIDEO,
  FETCH_USER_VIDEO,
  DELETE_USER_VIDEO
} from "../actions/userVideos";

let videos = JSON.parse(sessionStorage.getItem("videos"));
const initialState = videos ? { videos } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    // adding a liked video to user
    case ADD_USER_VIDEO:
      return {
        likedVideos: action.payload
      };

    case FETCH_USER_VIDEO:
      // getting a liked video from the user db
      return {
        likedVideos: action.payload
      };

    case DELETE_USER_VIDEO:
      // deleting a user liked video... BYe
      return {
        likedVideos: action.payload
      };

    default:
      return state;
  }
};
