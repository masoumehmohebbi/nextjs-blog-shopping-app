// @ts-nocheck
import http from "@/services/httpService";
import Router from "next/router";
import toast from "react-hot-toast";

import {
  SIGNIN_USER_REQUEST,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNOUT_USER,
} from "./userTypes";

export const signinUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST,
  };
};

export const singinUserSuccess = (users) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: users,
  };
};

export const singinUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: error,
  };
};

export const signupUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST,
  };
};

export const singupUserSuccess = (users) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: users,
  };
};

export const singupUserFailure = (error) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};

export const userSignin = (data) => (dispatch) => {
  dispatch(signinUserRequest());
  http
    .post("/user/signin", data, { withCredentials: true })
    .then(({ data }) => {
      toast.success(`${data.name} خوش آمدی!`);
      Router.push("/");
      dispatch(singinUserSuccess(data));
    })
    .catch((error) => {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      toast.error(errorMessage);
      dispatch(singinUserFailure(errorMessage));
    });
};

export const userSignup = (data) => (dispatch) => {
  dispatch(signupUserRequest());
  http
    .post("/user/signup", data, { withCredentials: true })
    .then(({ data }) => {
      toast.success(`${data.name} خوش آمدی!`);
      Router.push("/");
      dispatch(singinUserSuccess(data));
      dispatch(singupUserSuccess(data));
    })
    .catch((error) => {
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      toast.error(errorMessage);
      dispatch(singupUserFailure(errorMessage));
    });
};

export const signout = () => (dispatch) => {
  dispatch({ type: SIGNOUT_USER });
  // REMOVE USER DATA FROM LOCALSTORAGE
  http
    .get("/user/logout", { withCredentials: true })
    .then(({ data }) => {
      window.location.href = "/";
    })
    .catch();
};

export const loadUserData = (store) => {
  http
    .get("/user/load", { withCredentials: true })
    .then(({ data }) => {
      store.dispatch(singinUserSuccess(data));
    })
    .catch((err) => {});
};
