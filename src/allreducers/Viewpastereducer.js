const initialState = {
  loading: false,
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
        list: null,
        error: true,
      };

    default:
      return { ...state };
  }
};
export default ViewPastereducers;
