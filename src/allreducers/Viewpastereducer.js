const initialState = {
  loading: false,
  message: null,
  error: false,
  list: null,
};

const Viewpastereducer = (state = initialState, action) => {
  switch (action.type) {
    case "Pastelist_PENDING":
      return {
        ...state,
        loading: true,
        list: null,
      };
    case "Pastelist_SUCCESS":
      return {
        ...state,
        loading: false,

        list: action.list,
      };

    case "Pastelist_FAILURE":
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
export default Viewpastereducer;
