// user needs to be able to login, get user info, sign up, log out, delete and edit profile with authentication. also need a way incase auth doesnt work
// *********************************************************
import axios from "axios";
import {
  FETCH_USER,
  AUTH_ERROR,
  LOGOUT_USER,
  UPDATE_USER,
  DELETE_USER
} from "./types";
// import { exists } from "fs";
// var fs = require ('fs');

// user login
// verify with backend

export const loginUser = (creds, history) => {
  return async dispatch => {
    const res = await axios.post("/routes/login", creds);
    if (typeof res.data === "object") {
      history.push(`/user/${res.data._id}`);
    } else {
      // error login on. need to show a message explaining
      dispatch(authError("Incorrect Username and/or password."));
    }
  };
};

// get user info
// push id to server end
// dispatch type and data info

export const fetchUser = (id, history) => {
  return async dispatch => {
    const res = await axios.get("/routes/user/${id}");
    if (typeof res.data === "object") {
      dispatch({ type: FETCH_USER, payload: res.data });
      sessionStorage.setItem("session", JSON.stringify(res.data));
    } else {
      // error validating. need to let user know.
      dispatch(authError("Could not get info"));
    }
  };
};

// user sign up
// push new credentials to the back end

export const signupUser = (creds, history) => {
  return async dispatch => {
    const res = await axios.post("/routes/signup", creds);
    if (typeof res.data === "object") {
      history.push("/user/${res.data.id}");
    } else {
      // error signing up. already have an account
      dispatch(authError("Account already exists. Please log in"));
    }
  };
};

// log out user
export const logoutUser = () => {
  return dispatch => {
    axios.get("routes/logout");
    dispatch({ type: LOGOUT_USER });
    // remove them from session storage
    sessionStorage.removeItem("session");
    // remove thier videos from session storage
    sessionStorage.removeItem("videos");
    // refresh the page for them
    window.location.reload();
  };
};

// edit user data
// push new info to the server

export const editUser = newCreds => {
  return async dispatch => {
    const res = await axios.get("/routes/user/${newCreds._id}");
    dispatch({ type: UPDATE_USER, payload: res.data });
    sessionStorage.setItem("session", JSON.stringify(res.data));
  };
};

// delete user data
// remove them from the server

export const deleteUser = (id, history) => {
  console.log("deleting: ", id);
  return async dispatch => {
    const res = await axios.delete("/routes/user/$(id}/delete");
    if (res.data === "deleted") {
      // remove from session storage
      sessionStorage.removeItem("session");
      // remove videos from session storage
      sessionStorage.removeItem("videos");
      dispatch({ type: DELETE_USER });
      history.push("/");
      // refresh the page
      window.location.reload();
    }
  };
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
