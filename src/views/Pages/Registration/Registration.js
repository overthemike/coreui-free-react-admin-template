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
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../../../../src/CheckoutForm";

function Registration(props) {
  const [username, setUsername] = useState("");
  const [usernameInvalid, setUsernameInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confPassword, setConfPassword] = useState("");
  const [confPasswordInvalid, setConfPasswordInvalid] = useState(false);
  const { signin } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.length === 0) {
      setUsernameInvalid(true);
    }
    if (password.length === 0) {
      setPasswordInvalid(true);
    }
    if (password !== confPassword) {
      setConfPasswordInvalid(true);
    } else {
      try {
        // await signin(username, password);
        props.history.push("/");
      } catch (e) {
        setPasswordInvalid(true);
        setUsernameInvalid(true);
      }
    }
  }

  return (
    <div className="app bg-dark">
      <img src={pic} alt="travelWealth" className="loginLogo mt-n5 mx-auto" />
      <div className="d-flex flex-row">
        <Card className="w-100 bg-light">
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <h1 className="text-primary">Registration</h1>
              <p className="text-primary">Sign up</p>
              <p className="text-primary">
                Already A Member? <a href="/login">Sign In</a>
              </p>
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
                  The Username/Password You entered can't be empty.
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
                  The Username/Password You entered can't be empty.
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
                  placeholder="Confirm Password"
                  autoComplete="current-password"
                  value={confPassword}
                  onChange={e => setConfPassword(e.target.value)}
                  invalid={confPasswordInvalid}
                />
                <FormFeedback invalid={confPasswordInvalid}>
                  The Password You entered doesn't match.
                </FormFeedback>
              </InputGroup>
              <Row>
                <Col xs="6">
                  <Button type="submit" color="primary" className="px-4">
                    Registration
                  </Button>
                </Col>
                <Col xs="6" className="text-right"></Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
        <Card className="w-100 bg-light">
          <CardBody>
            <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
              <div className="example">
                <h1>Payment</h1>
                <h4>Please Submit your payment for $50 to get started</h4>
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Registration;
