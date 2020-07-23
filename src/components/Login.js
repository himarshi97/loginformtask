import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, BrowserRouter as Router } from "react-router-dom";
//import { ToastContainer, toast } from "react-toastify";
import {
  Form,
  FormGroup,
  ButtonToggle,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Col,
  Container,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import { signinUser } from "../actions/action.js";
//import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const schema = Yup.object().shape({
  identifier: Yup.string().trim().required(),
  password: Yup.string().trim().required(),
});
const Loginform = () => {
  const { register, control, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = ({ identifier, password }) => {
    dispatch(signinUser({ identifier, password, history }));
  };
  // const notify = () => {
  //   toast.success("Login Success !", {
  //     position: "top-center",
  //     autoClose: 500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };
  return (
    <div className="form">
      <Container>
        <div>
          <div className="logintitle">Login</div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Controller
                placeholder="Enter Name"
                as={Input}
                ref={register}
                control={control}
                name="identifier"
                defaultValue=""
              />
              {errors.identifier && (
                <div className="text-danger">* {errors.identifier.message}</div>
              )}
            </FormGroup>

            <br />
            <FormGroup>
              <Controller
                placeholder="Enter Password"
                as={Input}
                type="password"
                ref={register}
                control={control}
                name="password"
                defaultValue=""
                className="inputtext"
              />
              {errors.password && (
                <div className="text-danger">* {errors.password.message}</div>
              )}
            </FormGroup>
            <br />
            <div className="signin">
              {/* <Link to="/dashboard"> */}
              <Button color="primary" type="submit" className="signbutton">
                Sign in
              </Button>
              {/* </Link> */}
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Loginform;
