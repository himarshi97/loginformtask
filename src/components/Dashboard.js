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

  return (
    <div className="dashboard">
      <div className="modalll">
        <Button color="primary" onClick={toggle}>
          Add Paste
        </Button>
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
    </div>
  );
};

export default Dashboard;
