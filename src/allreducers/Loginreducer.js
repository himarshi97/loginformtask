import { toast } from "react-toastify";
const initialState = {
  stats: null,
  message: null,

  error: false,
};

const LoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case "Signin_PENDING":
      return {
        ...state,

        error: false,
        message: null,
        stats: null,
      };
    case "Signin_SUCCESS":
      return {
        ...state,

        error: false,

        message: null,
        stats: action.stats,
      };
    case "Signin_FAILURE":
      return {
        ...state,

        error: true,
        message: action.message,
        stats: null,
      };
    case "Createpaste_PENDING":
      return {
        ...state,

        error: false,
        message: null,
        stats: null,
      };
    case "Createpaste_SUCCESS":
      return {
        ...state,

        error: false,

        message: null,
        stats: action.stats,
      };
    case "Createpaste_FAILURE":
      return {
        ...state,

        error: true,
        message: action.message,
        stats: null,
      };
    case "Pastelist_PENDING":
      return {
        ...state,

        error: false,
        message: null,
        stats: null,
      };
    case "Pastelist_SUCCESS":
      return {
        ...state,

        error: false,

        message: null,
        stats: action.stats,
      };

    case "Pastelist_FAILURE":
      return {
        ...state,

        error: true,
        message: action.message,
        stats: null,
      };

    default:
      return { ...state };
  }
};
export default LoginReducers;
