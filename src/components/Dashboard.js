import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { createPaste, pasteList } from "../actions/action.js";
import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
import {
  Link,
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import Login from "./Login.js";
const FormSchema = Yup.object().shape({
  content: Yup.string().trim().required(),
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
  console.log(list);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pasteList());
  }, [dispatch]);

  const onSubmit = ({ content, Expiration, Exposure, title }) => {
    dispatch(createPaste({ content, Expiration, Exposure, title }));
  };
  let history = useHistory();
  var tokenn = localStorage.getItem("token");
  console.log(tokenn);
  const logout = () => {
    // var tokenn = localStorage.getItem("token");
    // console.log(tokenn);
    var cleartokenn = localStorage.clear("authtoken");

    if (cleartokenn == undefined) {
      console.log("cleartoken", cleartokenn);
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  };
  var username = localStorage.getItem("username");
  console.log("username", username);

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

                <Collapse
                  isOpen={isOpen}
                  navbar
                  style={{
                    backgroundColor: "darkblue",
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
                {/* <Row className="navv" sm="3"> */}
                <NavbarToggler
                  onClick={togle}
                  style={{
                    backgroundColor: "darkblue",
                  }}
                />
                {/* </Row> */}
              </Navbar>
            </Row>
          </Col>
          {/* <Col>
            <Row className="modalll">
              <Col className="logodiv">
                <img
                  src="https://i.pinimg.com/236x/07/11/74/071174ef23ecb6b7cba95f041f577141--best-games-free-games.jpg"
                  className="logo"
                />
              </Col> */}

          {/* <Navbar light expand="md" className="navbar">
                <Collapse isOpen={isOpen} navbar>
                  <Col className="linkdiv" sm="7">
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
                    </Nav>
                  </Col>
                </Collapse>
                <NavbarToggler onClick={togle} />
              </Navbar> */}

          {/* <Col className="linkdiv" sm="7">
                <Link to="#" className="link" style={{ color: "white" }}>
                  Home
                </Link>
                <Link to="#" className="link" style={{ color: "white" }}>
                  Tools
                </Link>
                <Link to="#" className="link" style={{ color: "white" }}>
                  Paste
                </Link>
                <Link to="#" className="link" style={{ color: "white" }}>
                  Contact
                </Link>
                <Link to="#" className="link" style={{ color: "white" }}>
                  Gallary
                </Link>
              </Col>

              {
                <Col className="adminname" sm="3">
                  {" "}
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    color="white"
                    className="usericon"
                  />
                  {username}
                </Col>
              }
              <Col className="logout" sm="1">
                <Button onClick={logout} title="logout">
                 
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    color="white"
                    className="logouticon"
                  />
                </Button>
              </Col> */}
          {/* </Row>
          </Col>
          <div></div> */}
          <div className="modall">
            <Modal isOpen={modal} toggle={toggle} className={modal}>
              <div className="modalbodyy">
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
                        // placeholder="Enter name/title..."
                        as={Input}
                        ref={register}
                        control={control}
                        name="title"
                        defaultValue=""
                      />

                      {errors.title && (
                        <div className="text-danger">
                          * {errors.title.message}
                        </div>
                      )}
                    </FormGroup>
                    <Button color="primary" type="submit" onClick={toggle}>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        color="white"
                        className="carticon"
                      />
                      Save
                    </Button>
                  </Form>
                </ModalBody>
              </div>
              {/* <ModalFooter>
                {" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter> */}
            </Modal>
          </div>
          <Container>
            <Col className="dashboard">
              <Row>
                <Button color="primary" onClick={toggle} className="addpaste">
                  Add Paste
                </Button>
                <Table responsive>
                  <thead className="tablehead">
                    <tr>
                      <th>No.</th>
                      <th>NAME</th>
                      <th>ADDED</th>
                      <th>EXPIRES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {stats == null ? (
            <div>refresh page</div>
          ) : (
            <> */}
                    {list
                      .slice(0)
                      .reverse()
                      .map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>

                          <td>{item.title}</td>
                          <td>{item.content}</td>
                          <td>{item.Expiration}</td>
                        </tr>
                      ))}

                    {/* </>
          )} */}
                  </tbody>
                </Table>
              </Row>
            </Col>
          </Container>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Dashboard;
