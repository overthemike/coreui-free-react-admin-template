import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Modal,
  ModalHeader
} from "reactstrap";
import pic from "../../../assets/img/brand/logo.svg";
import axios from "axios";

//{"name": "Mickey", "email": "mickey@disney.com", "phone": "1234567058"}
function ResetPassword(props) {
  const [username, setUsername] = useState("");
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  function goHome() {
    props.history.push("/");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (username.length === 0) {
      setUsernameInvalid(true);
    }
    if (password.length === 0) {
      setPasswordInvalid(true);
    }
    if (phone.length === 0) {
      setPhoneInvalid(true);
    } else {
      try {
        let response = await axios({
          url: "/api/customer-requests/change_password/",
          method: "post",
          data: {
            name: username,
            email: password,
            phone: phone
          }
        });
        if (response.status === 201) {
          toggle();
        }
      } catch (e) {
        console.log("ERROIm hR", e);
        setPasswordInvalid(true);
        setUsernameInvalid(true);
      }
    }
  }

  return (
    <>
      <div className="app bg-dark d-flex justify-content-center align-items-center">
        <img
          src={pic}
          alt="travelWealth"
          className="loginLogo mt-n5"
          onClick={goHome}
        />
        <Card className="w-75 bg-light">
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <h1 className="text-primary">Reset Password</h1>
              <InputGroup className="mb-5">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light">
                    <i className="fas fa-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Name"
                  autoComplete="email"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  invalid={usernameInvalid}
                />
                <FormFeedback invalid={usernameInvalid}>
                  The Username/Password You entered doesn't match our records.
                </FormFeedback>
              </InputGroup>
              <InputGroup className="mb-5">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light">
                    <i className="fas fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  invalid={passwordInvalid}
                />
                <FormFeedback invalid={passwordInvalid}>
                  The Username/Password You entered doesn't match our records.
                </FormFeedback>
              </InputGroup>
              <InputGroup className="mb-5">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light">
                    <i className="fas fa-phone"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  autoComplete="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  invalid={phoneInvalid}
                />
                <FormFeedback invalid={phoneInvalid}>
                  A Phone Number is Required
                </FormFeedback>
              </InputGroup>
              <Row>
                <Col xs="6" className="text-right"></Col>

                <Col xs="6">
                  <Button
                    type="submit"
                    color="primary"
                    className="px-4 btn-pill float-right"
                  >
                    Reset
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={modal} toggle={toggle} centered>
        <ModalHeader toggle={toggle}>
          Success! Your Request Has been Submitted.
        </ModalHeader>
      </Modal>
    </>
  );
}

export default ResetPassword;
