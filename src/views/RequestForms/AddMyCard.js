import React, { useState } from "react";
import { Button, Col, FormGroup, Form, Input, Label, Row } from "reactstrap";
import { useMyCards, useRecCards } from "../../hooks";

function RequestCard(props) {
  const [type, setType] = useState("");
  const [date_opened, setDateOpened] = useState("");
  const [status, setStatus] = useState("");
  const [card, setCard] = useState("");
  const { newCard } = useMyCards();
  const { recCards } = useRecCards();
  console.log("here", recCards);

  function handleSubmit(e) {
    e.preventDefault();
    newCard(type, date_opened, card, status);
  }
  return (
    <>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs="12" md="6">
              <FormGroup>
                <Label htmlFor="type">Type</Label>
                <Input
                  type="select"
                  name="type"
                  id="type"
                  value={type}
                  onChange={e => setType(e.target.value)}
                >
                  <option value="0">Please select</option>
                  <option value="member">Member</option>
                  <option value="companion">Companion</option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" md="6">
              <FormGroup>
                <Label htmlFor="date_opened">Date Opened</Label>
                <Input
                  type="text"
                  id="date_opened"
                  placeholder="YYYY-MM-DD"
                  value={date_opened}
                  onChange={e => setDateOpened(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="card">Card</Label>
                <Input
                  type="select"
                  name="card"
                  id="card"
                  value={card}
                  onChange={e => setCard(e.target.value)}
                >
                  {recCards.map(card => (
                    <option key={card.id} value={card.id}>
                      {card.name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col xs="12" md="6">
              <FormGroup row>
                <Col md="4">
                  <Label>Status</Label>
                </Col>
                <Col md="8">
                  <FormGroup
                    check
                    className="radio"
                    id="status"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                  >
                    <Row>
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="statusYes"
                        name="radios"
                        value="active"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="statusYes"
                      >
                        Active
                      </Label>
                    </Row>
                    <Row>
                      <Input
                        className="form-check-input"
                        type="radio"
                        id="statusNo"
                        name="radios"
                        value="inactive"
                      />
                      <Label
                        check
                        className="form-check-label"
                        htmlFor="statusNo"
                      >
                        Inactive
                      </Label>
                    </Row>
                  </FormGroup>
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
      </Col>
    </>
  );
}

export default RequestCard;
