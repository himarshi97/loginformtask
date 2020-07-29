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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import { signinUser } from "../actions/action.js";
//import axios from "axios";
import { Redirect } from "react-router-dom";
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
  var tokenn = localStorage.getItem("token");
  console.log(tokenn);
  return (
    <div>
      {tokenn ? (
        <div>
          <Redirect to="/dashboard" />
        </div>
      ) : (
        <div className="home">
          <div className="form">
            <div className="logintitle">Login</div>
            <hr />
            <Container>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="formgroup">
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
                      <p className="text-danger">
                        * {errors.identifier.message}
                      </p>
                    )}
                  </FormGroup>

                  <FormGroup className="formgroup">
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
                      <p className="text-danger">* {errors.password.message}</p>
                    )}
                  </FormGroup>
                </div>
                <div className="signin">
                  <Button color="primary" type="submit" className="signbutton">
                    Sign in
                  </Button>
                </div>
              </Form>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loginform;
