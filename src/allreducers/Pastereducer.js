const initialState = {
  loading: false,
  stats: null,
  list: null,
};

const Pastereducers = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PASTE_PENDING":
      return {
        ...state,
        stats: null,
      };
    case "CREATE_PASTE_SUCCESS":
      return {
        ...state,
        stats: action.stats,
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
    case "DELETE_PASTE_PENDING":
      return { ...state, loading: true, list: null };

    case "DELETE_PASTE_SUCCESS":
      return { ...state, loading: false };

    case "DELETE_PASTE_FAILURE":
      return { ...state, loading: false, error: true, list: null };

    default:
      return { ...state };
  }
};
export default Pastereducers;
