const initialState = {
  stats: null,
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
        stats: null,
      };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,

        error: false,

        message: null,
        stats: action.stats,
      };
    case "SIGN_IN_FAILURE":
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
