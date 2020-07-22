import React from "react";
import { useForm, Controller } from "react-hook-form";

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
const schema = Yup.object().shape({
  name: Yup.string().trim().required(),
  password: Yup.string().trim().required(),
});
const Loginform = () => {
  const { register, control, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div>
        <Col
          style={{
            backgroundColor: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Controller
                placeholder="Enter Name"
                as={Input}
                ref={register}
                control={control}
                name="name"
                defaultValue=""
                className="inputtext"
              />
              {errors.name && (
                <div className="text-danger">* {errors.name.message}</div>
              )}
            </FormGroup>

            <br />
            <FormGroup>
              <Controller
                placeholder="Enter Password"
                as={Input}
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
            <Col sm="12">
              <Button
                color="primary"
                type="submit"
                style={{
                  marginLeft: "37%",
                  width: "130px",
                }}
              >
                Sign in
              </Button>
            </Col>
          </Form>
        </Col>

        {/* <Col sm="4"></Col> */}
        {/* </Col> */}
      </div>
    </Container>
  );
};

export default Loginform;
