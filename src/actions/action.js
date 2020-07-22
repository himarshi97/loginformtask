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
        var token = localStorage.getItem("token");

        console.log("token", token);

        history.push("/dashboard");
      })

      .catch((error) => {
        dispatch({ type: "Signin_FAILURE", message: error.response });
      });
  };
};
