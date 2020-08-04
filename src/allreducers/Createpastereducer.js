const initialState = {
  stats: null,
  message: null,
  error: false,
  list: [],
};

const Createpastereducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return { ...state };
  }
};
export default Createpastereducer;
