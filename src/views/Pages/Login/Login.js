import React, { useState } from "react";
import pic from "../../../assets/img/brand/logo.svg";
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
  Row
} from "reactstrap";
import { useAuth } from "../../../hooks";

function Login(props) {
  const [username, setUsername] = useState("");
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const { signin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.length === 0) {
      setUsernameInvalid(true);
    }
    if (password.length === 0) {
      setPasswordInvalid(true);
    } else {
      try {
        await signin(username, password);
        props.history.push("/");
      } catch (e) {
        setPasswordInvalid(true);
        setUsernameInvalid(true);
      }
    }
  }

  return (
    <div className="app bg-dark d-flex justify-content-center align-items-center">
      <img src={pic} alt="travelWealth" className="loginLogo mt-n5" />
      <Col xs="12" md="6">
        <Card className="bg-light">
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <h1 className="text-primary">Login</h1>
              <p className="text-primary">Sign In to your account</p>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light">
                    <i className="fas fa-user"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  invalid={usernameInvalid}
                />
                <FormFeedback invalid={usernameInvalid}>
                  The Username/Password You entered doesn't match our records.
                </FormFeedback>
              </InputGroup>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light">
                    <i className="fas fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  invalid={passwordInvalid}
                />
                <FormFeedback invalid={passwordInvalid}>
                  The Username/Password You entered doesn't match our records.
                </FormFeedback>
              </InputGroup>
              <Row>
                <Col xs="6">
                  <Button type="submit" color="primary" className="px-4">
                    Login
                  </Button>
                </Col>
                <Col xs="6" className="text-right"></Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
}

export default Login;
