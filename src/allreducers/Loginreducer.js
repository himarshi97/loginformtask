const initialState = {
  login: null,
  error: false,
};

const LoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN_PENDING":
      return {
        ...state,
        error: false,
        login: null,
      };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        error: false,
        login: action.login,
      };
    case "SIGN_IN_FAILURE":
      return {
        ...state,
        error: true,
        login: null,
      };

    default:
      return { ...state };
  }
};
export default LoginReducers;
