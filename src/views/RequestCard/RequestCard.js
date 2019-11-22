import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Form,
  Input,
  Label,
  Row
} from "reactstrap";
import { useForms } from "../../hooks";

function RequestCard(props) {
  const [inquiry, setInquiry] = useState("");
  const [wallet_updated, setWallet] = useState("");
  const [notes, setNotes] = useState("");
  const { requestCard } = useForms();

  function handleSubmit(e) {
    e.preventDefault();
    requestCard(inquiry, wallet_updated, notes);
    console.log("in view");
  }
  return (
    <>
      <Col>
        <Card>
          <CardHeader>
            <strong>Member Credit Card Inquiry</strong>
          </CardHeader>
          <CardBody>
            Ready for a new credit card? Question about an existing card? Submit
            your request and we'll analyze your profile and provide options for
            your next move.
            <hr />
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label htmlFor="inquiry">My Inquiry</Label>
                    <Input
                      type="select"
                      name="inquiry"
                      id="inquiry"
                      value={inquiry}
                      onChange={e => setInquiry(e.target.value)}
                    >
                      <option value="0">Please select</option>
                      <option value="I'm ready for a new card">
                        I'm ready for a new card
                      </option>
                      <option value="Questions about an existing card">
                        Questions about an existing card
                      </option>
                      <option value="Something Else(describe below)">
                        Something Else(describe below)
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="4">
                      <Label>Is your Easy Go Wallet up to date?</Label>
                    </Col>
                    <Col md="8">
                      <FormGroup
                        check
                        className="radio"
                        id="wallet_updated"
                        value={wallet_updated}
                        onChange={e => setWallet(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletYes"
                            name="radios"
                            value="yes"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletYes"
                          >
                            Yes
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletNo"
                            name="radios"
                            value="no"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletNo"
                          >
                            No
                          </Label>
                        </Row>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="notes">Notes/Instructions</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        name="notes"
                        id="notes"
                        rows="3"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                      />
                    </Col>
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

export default RequestCard;
