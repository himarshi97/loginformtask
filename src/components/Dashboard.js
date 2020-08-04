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

import "react-toastify/dist/ReactToastify.css";
import { Redirect, useHistory, Link } from "react-router-dom";

const FormSchema = Yup.object().shape({
  content: Yup.string().required(),
  Expiration: Yup.string().required(),
  Exposure: Yup.string().required(),
  title: Yup.string().required(),
});
const Dashboard = (props) => {
  const { className } = props;
  const [state, setstate] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);

  const togle = () => setIsOpen(!isOpen);

  const { register, control, errors, handleSubmit } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const { loading, list } = useSelector((state) => ({
    loading: state.LoginReducers.loading,
    list: state.LoginReducers.list,
  }));
  console.log(list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pasteList());
  }, [dispatch, state]);

  const onSubmit = ({ content, Expiration, Exposure, title }) => {
    setstate(false);
    dispatch(createPaste({ content, Expiration, Exposure, title }));
    toggle();
    setstate(true);
  };

  let history = useHistory();
  const tokenn = localStorage.getItem("token");

  const logout = () => {
    const cleartokenn = localStorage.clear("authtoken");

    if (cleartokenn === undefined) {
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  };
  const username = localStorage.getItem("username");

  let created_at = null;
  const ordenarPorFecha = list.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  console.log(ordenarPorFecha);
  ordenarPorFecha.map((item, index) => {
    if (created_at !== new Date(item.created_at).toLocaleDateString()) {
      console.log(item.created_at);
      created_at = new Date(item.created_at).toLocaleDateString();
    }
  });

  return (
    <>
      {tokenn ? (
        <>
          <Navbar light expand="md" className="navbar">
            <NavbarBrand>
              {" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/35/Pastebin.com_logo.png"
                alt=""
                className="logo"
              />
            </NavbarBrand>

            <NavbarToggler onClick={togle} className="mr-2" />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <Link to="/" className="linkcolor">
                  Home
                </Link>

                <Link to="/" className="linkcolor">
                  Paste
                </Link>
                <Link to="/" className="linkcolor">
                  Tools
                </Link>
                <Link to="/" className="linkcolor">
                  Contact
                </Link>
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
                    defaultValue=""
                    type="select"
                    name="Expiration"
                    id="Select"
                  >
                    <option value="" label="Select">
                      Select
                    </option>
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
                    <option value="" label="Select">
                      Select
                    </option>
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
                    type="text"
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

          <Col className="dashboard">
            <Button color="primary" onClick={toggle} className="addpaste">
              Add Paste
            </Button>

            <>
              {loading ? (
                <div> loading....</div>
              ) : (
                <>
                  {list !== null && (
                    <Table bordered>
                      <thead className="tablehead">
                        <tr>
                          <th>No.</th>
                          <th>Content</th>
                          <th>EXPIRES</th>
                          <th>Exposure</th>
                          <th>NAME/Title</th>
                          <th>Created_Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.content}</td>
                            <td>{item.Expiration}</td>
                            <td>{item.Exposure}</td>
                            <td>{item.title}</td>
                            <td>
                              {" "}
                              <Moment format="YYYY/MM/DD">
                                {item.updated_at}
                              </Moment>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  )}
                </>
              )}
            </>
          </Col>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Dashboard;
