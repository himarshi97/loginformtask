import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, FormGroup, Input, Col, Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import { signinUser } from "../actions/action.js";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const schema = Yup.object().shape({
  identifier: Yup.string().required("Name is a required field"),
  password: Yup.string().required("Password is a required field"),
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
  const tokenn = localStorage.getItem("token");

  return (
    <>
      {tokenn ? (
        <Redirect to="/dashboard" />
      ) : (
        <Col className="home">
          <Col className="form" sm="5">
            <Col className="logintitle">Login</Col>
            <hr />
            <Container>
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
                    <p className="text-danger">* {errors.identifier.message}</p>
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

                <Button color="primary" type="submit" className="signbutton">
                  Sign in
                </Button>
              </Form>
            </Container>
          </Col>
        </Col>
      )}
    </>
  );
};

export default Loginform;
