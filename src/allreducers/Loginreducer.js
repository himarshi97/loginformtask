const initialState = {
  login: null,
  message: null,
  error: false,
};

const LoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_PENDING":
      return {
        ...state,

        error: false,
        message: null,
        login: null,
      };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,

        error: false,

        message: null,
        login: action.login,
      };
    case "SIGN_IN_FAILURE":
      return {
        ...state,

        error: true,
        message: action.message,
        login: null,
      };

    default:
      return { ...state };
  }
};
export default LoginReducers;
