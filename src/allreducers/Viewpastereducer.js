const initialState = {
  loading: false,
  message: null,
  error: false,
  list: [],
};

const ViewPastereducers = (state = initialState, action) => {
  switch (action.type) {
    case "PASTE_LIST_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "PASTE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,

        list: action.list,
      };

    case "PASTE_LIST_FAILURE":
      return {
        ...state,
        loading: false,
        error: true,
        message: action.message,
      };

    default:
      return { ...state };
  }
};
export default ViewPastereducers;
