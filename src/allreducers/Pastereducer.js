const initialState = {
  loading: false,
  error: false,
  stats: null,
  list: null,
};

const Pastereducers = (state = initialState, action) => {
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
export default Pastereducers;
