import axios from "axios";
import { toast } from "react-toastify";
export const signinUser = ({ identifier, password, history }) => {
  return (dispatch) => {
    dispatch({ type: "SIGN_IN_PENDING" });

    axios
      .post("https://pastebindemo.herokuapp.com/auth/local", {
        identifier,
        password,
      })

      .then((res) => {
        dispatch({ type: "SIGN_IN_SUCCESS", login: res.data.data });
        console.log(res.data.data);
        toast.success("Login Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        localStorage.setItem("token", res.data.jwt);

        localStorage.setItem("username", res.data.user.username);

        history.push("/dashboard");
      })

      .catch((error) => {
        toast.error(error.response.data.error, {
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
