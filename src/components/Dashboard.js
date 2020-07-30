import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { createPaste, pasteList } from "../actions/action.js";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Container,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect, useHistory } from "react-router-dom";
import Login from "./Login.js";
const FormSchema = Yup.object().shape({
  content: Yup.string().required(),
  Expiration: Yup.string().required(),
  Exposure: Yup.string().required(),
  title: Yup.string().required(),
});
const Dashboard = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);

  const togle = () => setIsOpen(!isOpen);

  const { register, control, errors, handleSubmit } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const { list } = useSelector((state) => ({
    list: state.LoginReducers.list,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pasteList());
  }, [dispatch]);

  const onSubmit = ({ content, Expiration, Exposure, title }) => {
    dispatch(createPaste({ content, Expiration, Exposure, title }));
    toggle();
  };
  let history = useHistory();
  var tokenn = localStorage.getItem("token");

  const logout = () => {
    var cleartokenn = localStorage.clear("authtoken");

    if (cleartokenn == undefined) {
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  };
  var username = localStorage.getItem("username");

  return (
    <>
      {tokenn ? (
        <>
          <Col>
            <Row className="modalll">
              <Navbar light expand="md" className="navbar">
                <img
                  src="https://i.pinimg.com/236x/07/11/74/071174ef23ecb6b7cba95f041f577141--best-games-free-games.jpg"
                  className="logo"
                />
                <NavbarToggler
                  onClick={togle}
                  style={{
                    backgroundColor: "#154867 ",
                  }}
                />
                <Collapse
                  isOpen={isOpen}
                  navbar
                  style={{
                    backgroundColor: "#154867",
                  }}
                >
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink href="/components/" style={{ color: "white" }}>
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/" style={{ color: "white" }}>
                        Paste
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/" style={{ color: "white" }}>
                        Tools
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/components/" style={{ color: "white" }}>
                        Contact
                      </NavLink>
                    </NavItem>
                  </Nav>
                  {
                    <NavbarText
                      className="adminname"
                      style={{
                        color: "white",
                        marginRight: "5px",
                        marginLeft: "15px",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        color="white"
                        className="usericon"
                      />
                      {username}
                    </NavbarText>
                  }
                  <Button
                    onClick={logout}
                    title="logout"
                    style={{
                      float: "right",
                      marginRight: "25px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      color="white"
                      className="logouticon"
                    />
                  </Button>
                </Collapse>
              </Navbar>
            </Row>
          </Col>

          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Create Paste</ModalHeader>
            <ModalBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Label for="exampleText">Content</Label>
                  <Controller
                    placeholder=""
                    as={Input}
                    type="textarea"
                    ref={register}
                    control={control}
                    name="content"
                    defaultValue=""
                  />
                  {errors.content && (
                    <div className="text-danger">
                      * {errors.content.message}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Expiration</Label>
                  <Controller
                    as={Input}
                    ref={register}
                    control={control}
                    type="select"
                    name="Expiration"
                    id="Select"
                  >
                    <option name="select">Select</option>
                    <option value="aminute" name="aminute">
                      10 Minutes
                    </option>
                    <option value="ahours" name="ahours">
                      1 Hours
                    </option>
                  </Controller>
                  {errors.Expiration && (
                    <div className="text-danger">
                      * {errors.Expiration.message}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="exampleSelect">Exposure</Label>

                  <Controller
                    as={Input}
                    ref={register}
                    control={control}
                    type="select"
                    name="Exposure"
                    id="Select"
                  >
                    <option name="select">Select</option>
                    <option value="public" name="public">
                      Public
                    </option>
                    <option value="private" name="private">
                      Private(members only)
                    </option>
                    <option value="unlisted" name="unlisted">
                      unlisted
                    </option>
                  </Controller>
                  {errors.Exposure && (
                    <div className="text-danger">
                      * {errors.Exposure.message}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>Name/Title</Label>
                  <Controller
                    as={Input}
                    ref={register}
                    control={control}
                    name="title"
                    defaultValue=""
                  />

                  {errors.title && (
                    <div className="text-danger">* {errors.title.message}</div>
                  )}
                </FormGroup>
                <Button color="primary">
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    color="white"
                    className="carticon"
                  />
                  Save
                </Button>
              </Form>
            </ModalBody>
          </Modal>
          <Container>
            <Row className="dashboard">
              <Col className="add">
                <Button color="primary" onClick={toggle} className="addpaste">
                  Add Paste
                </Button>
              </Col>
              <Table bordered>
                <thead className="tablehead">
                  <tr>
                    <th>No.</th>
                    <th>NAME</th>
                    <th>Created_Date</th>
                    <th>EXPIRES</th>
                  </tr>
                </thead>
                <tbody>
                  {list
                    .slice(0)
                    .reverse()
                    .map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>

                        <td>{item.title}</td>
                        <td>
                          {" "}
                          <Moment format="YYYY/MM/DD">{item.updated_at}</Moment>
                        </td>
                        <td>{item.Expiration}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Row>
          </Container>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Dashboard;
