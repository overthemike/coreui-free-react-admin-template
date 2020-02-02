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
  Row
} from "reactstrap";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "../../../../src/CheckoutForm";

function Registration(props) {
  const [email, setemail] = useState("");
  const [emailInvalid, setemailInvalid] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [firstnameInvalid, setfirstnameInvalid] = useState(false);
  const [lastname, setlastname] = useState("");
  const [lastnameInvalid, setlastnameInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [confPassword, setConfPassword] = useState("");
  const [confPasswordInvalid, setConfPasswordInvalid] = useState(false);
  const [showStripe, setShowStripe] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    if (email.length === 0) {
      setemailInvalid(true);
    }
    if (firstname.length === 0) {
      setfirstnameInvalid(true);
    }
    if (lastname.length === 0) {
      setlastnameInvalid(true);
    }
    if (password.length < 6) {
      setPasswordInvalid(true);
    }
    if (password !== confPassword && password.length < 6) {
      setConfPasswordInvalid(true);
    } else {
      setShowStripe(false);
    }
  }
  return (
    <>
      {showStripe ? (
        <Card className="w-75 bg-light loginCard">
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <h1 className="text-primary">Registration</h1>
              <p className="text-primary">Sign up</p>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light">
                    <i className="fas fa-envelope"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  placeholder="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  invalid={emailInvalid}
                />
                <FormFeedback invalid={emailInvalid}>
                  The email/Password You entered can't be empty.
                </FormFeedback>
              </InputGroup>
              <div className="d-flex">
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="bg-light">
                      <i className="fas fa-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="firstname"
                    autoComplete="firstname"
                    value={firstname}
                    onChange={e => setfirstname(e.target.value)}
                    invalid={firstnameInvalid}
                  />
                  <FormFeedback invalid={firstnameInvalid}>
                    Your First Name can't be empty.
                  </FormFeedback>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText className="bg-light">
                      <i className="fas fa-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    placeholder="lastname"
                    autoComplete="lastname"
                    value={lastname}
                    onChange={e => setlastname(e.target.value)}
                    invalid={lastnameInvalid}
                  />
                  <FormFeedback invalid={lastnameInvalid}>
                    Your Last Name can't be empty.
                  </FormFeedback>
                </InputGroup>
              </div>
              <InputGroup className="mb-4">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText className="bg-light">
                    <i className="fas fa-lock"></i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  placeholder="Password must be at least 6 characters"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  invalid={passwordInvalid}
                />
                <FormFeedback invalid={passwordInvalid}>
                  The email/Password You entered can't be empty.
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
                <Col xs="6" className="text-right"></Col>

                <Col xs="6">
                  <Button
                    type="submit"
                    color="primary"
                    className="px-4 btn-pill float-right"
                  >
                    Register
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      ) : (
        <Card className="w-75 bg-light loginCard">
          <CardBody>
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
              <div className="example">
                <h1>Payment</h1>
                <h4>Please Submit your payment for $50 to get started</h4>
                <Elements>
                  <CheckoutForm
                    email={email}
                    firstname={firstname}
                    lastname={lastname}
                    password={password}
                  />
                </Elements>
              </div>
            </StripeProvider>
          </CardBody>
        </Card>
      )}
    </>
  );
}

export default Registration;
