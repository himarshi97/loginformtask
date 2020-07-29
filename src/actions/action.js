import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
export const signinUser = ({ identifier, password, history }) => {
  let token;

  return (dispatch) => {
    dispatch({ type: "Signin_PENDING" });

    axios
      .post("https://pastebindemo.herokuapp.com/auth/local", {
        identifier,
        password,
      })

      .then((res) => {
        dispatch({ type: "Signin_SUCCESS", stats: res.data.data });
        console.log(res);
        toast.success("Login Success !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        localStorage.setItem("token", (token = res.data.jwt));
        console.log("token", token);
        localStorage.setItem("username", (username = res.data.user.username));
        console.log("username", username);
        var username = localStorage.getItem("username");
        console.log("username", username);
        var token = localStorage.getItem("token");

        console.log("token", token);
        history.push("/dashboard");
        // {
        //   token ? history.push("/dashboard") : history.push("/");
        // }
      })

      .catch((error) => {
        dispatch({ type: "Signin_FAILURE", message: error.response });
        toast.error("Login Error !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

          progress: undefined,
        });
      });
  };
};
export const createPaste = ({ content, Expiration, Exposure, title }) => {
  console.log(content, Expiration, Exposure, title);
  const tokenn = localStorage.getItem("token");
  const authtoken = {
    headers: {
      Authorization: `Bearer ${tokenn}`,
    },
  };
  console.log(authtoken);
  return (dispatch) => {
    dispatch({ type: "Createpaste_PENDING" });

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
        dispatch({ type: "Createpaste_SUCCESS", stats: res.data.data });
        toast.success("Paste Created Successfully !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload();
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
        dispatch({ type: "Createpaste_FAILURE", message: error.response });
        toast.error("paste not created", {
          position: "top-center",
          autoClose: 2000,
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
  console.log(authtoken);
  return (dispatch) => {
    dispatch({ type: "Pastelist_PENDING" });

    axios
      .get("https://pastebindemo.herokuapp.com/pastes", authtoken)

      .then((res) => {
        dispatch({ type: "Pastelist_SUCCESS", list: res.data });
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
        dispatch({ type: "Pastelist_FAILURE", message: error.response });
        toast.warn("try to login again !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
};
export const admin = () => {
  const tokenn = localStorage.getItem("token");
  const authtoken = {
    headers: {
      Authorization: `Bearer ${tokenn}`,
    },
  };
  console.log(authtoken);
  return (dispatch) => {
    dispatch({ type: "Admin_PENDING" });

    axios
      .get("https://pastebindemo.herokuapp.com/auth/local", authtoken)

      .then((res) => {
        dispatch({ type: "Admin_SUCCESS", list: res.data.data });
        console.log(res);
      })

      .catch((error) => {
        console.log(error);
        dispatch({ type: "Admin_FAILURE", message: error.response });
      });
  };
};
