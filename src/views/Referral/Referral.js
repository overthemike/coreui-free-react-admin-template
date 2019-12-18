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
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setemail] = useState("");
  const [notes, setnotes] = useState("");
  const [fnameInvalid, setfnameInvalid] = useState(false);
  const [lNameInvalid, setlNameInvalid] = useState(false);
  const [emailInvalid, setemailInvalid] = useState(false);
  const { addReferral } = useReferral();

  async function handleSubmit(e) {
    e.preventDefault();
    if (fName.length === 0) {
      setfnameInvalid(true);
    }
    if (lName.length === 0) {
      setlNameInvalid(true);
    }
    if (email.length === 0) {
      setemailInvalid(true);
    } else {
      try {
        await addReferral(fName, lName, email, notes);
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
                    value={fName}
                    onChange={e => setFname(e.target.value)}
                  >
                    <Label htmlFor="depart">Friend's Name</Label>
                    <Input type="text" id="depart" invalid={fnameInvalid} />
                    <FormFeedback invalid={fnameInvalid}>
                      Name is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={lName}
                    onChange={e => setLname(e.target.value)}
                  >
                    <Label htmlFor="depart">Friends Email</Label>
                    <Input type="text" id="depart" invalid={lNameInvalid} />
                    <FormFeedback invalid={lNameInvalid}>
                      Email is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
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
