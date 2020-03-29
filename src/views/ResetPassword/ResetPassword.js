import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  FormFeedback,
  Form,
  Input,
  Label,
  Row,
  Modal,
  ModalBody
} from "reactstrap";
import { useResetPassword } from "../../hooks";
import { useAuth } from "../../hooks";

function ResetPassword(props) {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confPasswordInvalid, setConfPasswordInvalid] = useState(false);
  const { newPassword } = useResetPassword();
  const [modal, setModal] = useState(false);
  const { signout } = useAuth();

  const toggle = () => setModal(!modal);
  function handleClick() {
    toggle();
    signout();
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (password.length === 0) {
      setPasswordInvalid(true);
      return;
    }
    if (password !== confPassword) {
      setConfPasswordInvalid(true);
    } else {
      try {
        await newPassword(password);
        toggle();
        setPassword("");
        setConfPassword("");
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <>
      <Col>
        <Card className="mt-3">
          <CardHeader>
            <strong>Reset Password</strong>
          </CardHeader>
          <CardBody className="bg-light">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  >
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      invalid={passwordInvalid}
                    />
                    <FormFeedback invalid={passwordInvalid}>
                      Password is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={confPassword}
                    onChange={e => setConfPassword(e.target.value)}
                  >
                    <Label htmlFor="confPassword">Confirm Your Password</Label>
                    <Input
                      type="password"
                      id="confPassword"
                      invalid={confPasswordInvalid}
                    />
                    <FormFeedback invalid={confPasswordInvalid}>
                      Opps, Your Passwords don't match
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Button
                className="float-right btn-pill"
                type="submit"
                size="sm"
                color="primary"
              >
                <i className="fa fa-dot-circle-o"></i> Submit
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h3 className="mb-3">Your Password Reset was Successful!</h3>
          <Button
            className="float-right btn-pill"
            size="sm"
            color="primary"
            onClick={handleClick}
          >
            Dismiss
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
}

export default ResetPassword;
