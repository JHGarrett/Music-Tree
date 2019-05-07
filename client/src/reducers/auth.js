import {
  FETCH_USER,
  AUTH_ERROR,
  LOGOUT_USER,
  UPDATE_USER,
  DELETE_USER
} from "../actions/types";

let session = JSON.parse(sessionStorage.getItem("session"));
const initialState = session
  ? { loggedIn: true, creds: session, error: "" }
  : { loggedIn: false, creds: {}, error: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      // getting user and auth
      return {
        error: "",
        loggedIn: true,
        creds: action.payload
      };

    case LOGOUT_USER:
      // logging out the user
      return {
        error: "",
        loggedIn: false,
        creds: {}
      };

    case UPDATE_USER:
      // updating the user and auth
      return {
        error: "",
        loggedIn: true,
        creds: action.payload
      };

    case DELETE_USER:
      //  bye bye user
      return {
        error: "",
        loggedIn: false,
        creds: {}
      };

    case AUTH_ERROR:
      // whoops
      return {
        ...state,
        error: action.payload,
        loggedIn: false,
        creds: {}
      };

    default:
      return state;
  }
};
