const initialState = {
  stats: null,
  error: false,
};

const CreatePastereducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PASTE_PENDING":
      return {
        ...state,
        error: false,
        stats: null,
      };
    case "CREATE_PASTE_SUCCESS":
      return {
        ...state,
        error: false,
        stats: action.stats,
      };
    case "CREATE_PASTE_FAILURE":
      return {
        ...state,
        error: true,
        stats: null,
      };

    default:
      return { ...state };
  }
};
export default CreatePastereducers;
