const initialState = {
  stats: null,
  message: null,
  error: false,
};

const CreatePastereducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PASTE_PENDING":
      return {
        ...state,

        error: false,
        message: null,
        stats: null,
      };
    case "CREATE_PASTE_SUCCESS":
      return {
        ...state,

        error: false,

        message: null,
        stats: action.stats,
      };
    case "CREATE_PASTE_FAILURE":
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
export default CreatePastereducers;
