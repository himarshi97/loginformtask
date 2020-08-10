import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { createPaste, pasteList } from "../actions/Pasteaction.js";
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
import { Redirect, useHistory } from "react-router-dom";

const formSchema = Yup.object().shape({
  content: Yup.string().required("Content is a required field"),
  Expiration: Yup.string().required(),
  Exposure: Yup.string().required(),
  title: Yup.string().required("Name/Title is a required field"),
});
const Dashboard = (props) => {
  const { className } = props;
  const [state, setstate] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);

  const pastetoggle = () => setIsOpen(!isOpen);

  const { register, control, errors, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { loading, list } = useSelector((state) => ({
    loading: state.Pastereducers.loading,
    list: state.Pastereducers.list,
  }));

  const dispatch = useDispatch();

  const onSubmit = ({ content, Expiration, Exposure, title }) => {
    dispatch(createPaste({ content, Expiration, Exposure, title, setModal }));
    dispatch(pasteList(list));
  };
  useEffect(() => {
    dispatch(pasteList());
  }, [dispatch]);

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

  return (
    <>
      {tokenn ? (
        <>
          <Navbar light expand="md" className="navcolor">
            <NavbarBrand href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/35/Pastebin.com_logo.png"
                alt=""
                className="logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={pastetoggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/" className="text-white">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" className="text-white">
                    Paste
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" className="text-white">
                    Tools
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/" className="text-white">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
              {
                <NavbarText className="adminname text-white">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    color="white"
                    className="usericon"
                  />
                  {username}
                </NavbarText>
              }
              <Button onClick={logout} title="logout" className="loggut">
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
                <Col className="load"> loading...</Col>
              ) : (
                <>
                  {list !== null && (
                    <Table bordered responsive className="tabell">
                      <thead className="tablehead">
                        <tr>
                          <th>Content</th>
                          <th>Expiration</th>
                          <th>Exposure</th>
                          <th>Name</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list
                          .slice(0)
                          .sort(
                            (item, index) =>
                              new Date(index.created_at) -
                              new Date(item.created_at)
                          )
                          .map((item, index) => (
                            <tr key={index}>
                              <td>{item.content}</td>
                              <td>{item.Expiration}</td>
                              <td>{item.Exposure}</td>
                              <td>{item.title}</td>
                              <td>
                                <Moment format="Do MMM YY">
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
