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
  Row
} from "reactstrap";
import { useReferral } from "../../hooks";

function Referral(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setemail] = useState("");
  const [notes, setnotes] = useState("");
  const [nameInvalid, setNameInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [emailInvalid, setemailInvalid] = useState(false);

  const { addReferral } = useReferral();

  async function handleSubmit(e) {
    e.preventDefault();
    if (name.length === 0) {
      setNameInvalid(true);
    }
    if (phone.length === 0) {
      setPhoneInvalid(true);
    }
    if (email.length === 0) {
      setemailInvalid(true);
    } else {
      try {
        await addReferral(name, phone, email, notes);
        props.history.push("/");
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
            <strong>Refer A Friend</strong>
          </CardHeader>
          <CardBody className="bg-light">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    value={name}
                    onChange={e => setName(e.target.value)}
                  >
                    <Label htmlFor="depart">Friend's Name</Label>
                    <Input type="text" id="depart" invalid={nameInvalid} />
                    <FormFeedback invalid={nameInvalid}>
                      Name is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={email}
                    onChange={e => setemail(e.target.value)}
                  >
                    <Label htmlFor="depart">Friends Email</Label>
                    <Input type="text" id="depart" invalid={emailInvalid} />
                    <FormFeedback invalid={emailInvalid}>
                      Email is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  >
                    <Label htmlFor="depart">Friends Phone Number</Label>
                    <Input type="text" id="depart" invalid={phoneInvalid} />
                    <FormFeedback invalid={phoneInvalid}>
                      Phone Number is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={notes}
                    onChange={e => setnotes(e.target.value)}
                  >
                    <Label htmlFor="depart">Notes</Label>
                    <Input type="textarea" id="depart" />
                  </FormGroup>
                </Col>
              </Row>
              <Button
                className="float-right"
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
    </>
  );
}

export default Referral;
