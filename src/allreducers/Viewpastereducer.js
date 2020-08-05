const initialState = {
  loading: false,
  message: null,
  error: false,
  list: null,
};

const ViewPastereducers = (state = initialState, action) => {
  switch (action.type) {
    case "PASTE_LIST_PENDING":
      return {
        ...state,
        loading: true,
        list: null,
        message: null,
      };
    case "PASTE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        message: null,
        list: action.list,
      };

    case "PASTE_LIST_FAILURE":
      return {
        ...state,
        loading: false,
        list: null,
        error: true,
        message: action.message,
      };

    default:
      return { ...state };
  }
};
export default ViewPastereducers;
