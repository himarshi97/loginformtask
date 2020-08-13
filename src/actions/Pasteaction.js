import axios from "axios";
import { toast } from "react-toastify";

export const createPaste = ({
  content,
  Expiration,
  Exposure,
  title,
  setModal,
}) => {
  const tokenn = localStorage.getItem("token");
  const authtoken = {
    headers: {
      Authorization: `Bearer ${tokenn}`,
    },
  };

  return (dispatch) => {
    dispatch({ type: "CREATE_PASTE_PENDING" });

    axios
      .post(
        "https://pastebindemo.herokuapp.com/pastes",
        {
          content,
          Expiration,
          Exposure,
          title,
        },
        authtoken
      )

      .then((res) => {
        dispatch({ type: "CREATE_PASTE_SUCCESS", stats: res.data.data });
        dispatch(pasteList());
        toast.success("Paste Created Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModal(false);
      })

      .catch(() => {
        setModal(true);
        toast.error("paste not created", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
};
export const pasteList = () => {
  const tokenn = localStorage.getItem("token");
  const authtoken = {
    headers: {
      Authorization: `Bearer ${tokenn}`,
    },
  };

  return (dispatch) => {
    dispatch({ type: "PASTE_LIST_PENDING" });

    axios
      .get("https://pastebindemo.herokuapp.com/pastes", authtoken)

      .then((res) => {
        dispatch({ type: "PASTE_LIST_SUCCESS", list: res.data });
      });
  };
};
