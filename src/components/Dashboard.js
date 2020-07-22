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
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { yupResolver } from "@hookform/resolvers";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const { register, control, errors, handleSubmit } = useForm({
    resolver: yupResolver(FormSchema),
  });
  const { stats } = useSelector((state) => ({
    stats: state.LoginReducers.stats,
  }));
  console.log(stats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pasteList());
  }, [dispatch]);

  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };
  const onSubmit = ({ content, Expiration, Exposure, title }) => {
    dispatch(createPaste({ content, Expiration, Exposure, title }));
  };

  return (
    <div className="dashboard">
      <div className="modalll">
        <Button color="primary" onClick={toggle}>
          Add Paste
        </Button>

        {/* <Col className="Dashboardtitle" sm="7">
            Dashbord
          </Col> */}

        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Create Paste</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label for="exampleText">Add Paste</Label>
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
                  <div className="text-danger">* {errors.content.message}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Paste Expiration</Label>
                <Controller
                  as={Input}
                  ref={register}
                  control={control}
                  type="select"
                  name="Expiration"
                  id="Select"
                >
                  <option value="aminute" name="aminute">
                    10 Minutes
                  </option>
                  <option value="ahours" name="ahours">
                    1 Hours
                  </option>
                  {/* <option value="day" name="day">
                    1 Day
                  </option>
                  <option value="week" name="week">
                    1 Week
                  </option>
                  <option value="weeks" name="weeks">
                    2 Weeks
                  </option>
                  <option value="Month" name="month">
                    1 Month
                  </option>
                  <option value="Months" name="months">
                    6 Months
                  </option>
                  <option value="year" name="year">
                    1 Year
                  </option> */}
                </Controller>
                {errors.Expiration && (
                  <div className="text-danger">
                    * {errors.Expiration.message}
                  </div>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Paste Exposure</Label>

                <Controller
                  as={Input}
                  ref={register}
                  control={control}
                  type="select"
                  name="Exposure"
                  id="Select"
                >
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
                  <div className="text-danger">* {errors.Exposure.message}</div>
                )}
              </FormGroup>
              <FormGroup>
                <Label>Paste Name/Title</Label>
                <Controller
                  placeholder="Enter text here..."
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
              <Button color="primary" type="submit" onClick={toggle}>
                Create New Paste
              </Button>
            </Form>
          </ModalBody>
          <ModalFooter>
            {" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>

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
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>

      {/* {stats !== null && (
        <ul>
          {stats.map((item, index) => (
            <li key={index} className="li">
              {item.Expiration}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Dashboard;
