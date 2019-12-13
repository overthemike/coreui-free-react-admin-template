import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  CardHeader,
  Col,
  FormGroup,
  FormFeedback,
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";
import { useFlights } from "../../hooks";

function RequestFlights(props) {
  const [routing, setRouting] = useState("");
  const [flexRouting, setflexRouting] = useState("");
  const [departCity, setdepartCity] = useState("");
  const [departCityInvalid, setdepartCityInvalid] = useState(false);
  const [destinations, setDestinations] = useState("");
  const [destinationsInvalid, setDestinationsInvalid] = useState(false);
  const [departDate, setdepartDate] = useState("");
  const [departDateInvalid, setdepartDateInvalid] = useState(false);
  const [flexDepartDate, setflexDepartDate] = useState("");
  const [returnDate, setreturnDate] = useState("");
  const [returnDateInvalid, setreturnDateInvalid] = useState(false);
  const [flexReturnDate, setflexReturnDate] = useState("");
  const [preferred, setPreffered] = useState("");
  const [passengers, setPassengers] = useState("");
  const [passengersInvalid, setPassengersInvalid] = useState(false);
  const [passNames, setpassNames] = useState("");
  const [passNamesInvalid, setpassNamesInvalid] = useState(false);
  const [bags, setBags] = useState("");
  const [bagsInvalid, setBagsInvalid] = useState(false);
  const [notes, setNotes] = useState("");
  const { requestFlight } = useFlights();

  async function handleSubmit(e) {
    e.preventDefault();
    if (departCity.length === 0) {
      setdepartCityInvalid(true);
    }
    if (destinations.length === 0) {
      setDestinationsInvalid(true);
    }
    if (departDate.length === 0) {
      setdepartDateInvalid(true);
    }
    if (returnDate.length === 0) {
      setreturnDateInvalid(true);
    }
    if (passengers.length === 0) {
      setPassengersInvalid(true);
    }
    if (passNames.length === 0) {
      setpassNamesInvalid(true);
    }
    if (bags.length === 0) {
      setBagsInvalid(true);
    } else {
      try {
        await requestFlight(
          routing,
          flexRouting,
          departCity,
          destinations,
          departDate,
          flexDepartDate,
          returnDate,
          flexReturnDate,
          preferred,
          passengers,
          passNames,
          bags,
          notes
        );
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
            <strong>Request a Flight</strong>
          </CardHeader>
          <CardBody className="bg-light">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="2">
                      <Label>Routing</Label>
                    </Col>
                    <Col md="10">
                      <FormGroup
                        check
                        className="radio"
                        value={routing}
                        onChange={e => setRouting(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="roundTrip"
                            name="roundTrip"
                            value="roundTrip"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="roundTrip"
                          >
                            Roundtrip
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="oneWay"
                            name="oneWay"
                            value="oneWay"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="oneWay"
                          >
                            One-way
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="multiCity"
                            name="multiCity"
                            value="multiCity"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="multiCity"
                          >
                            Multi-city
                          </Label>
                        </Row>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="4">
                      <Label>Flexible on routing?</Label>
                    </Col>
                    <Col md="8">
                      <FormGroup
                        check
                        className="radio"
                        value={flexRouting}
                        onChange={e => setflexRouting(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="radio1"
                            name="radios"
                            value="yes"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="radio1"
                          >
                            Yes
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="radio2"
                            name="radios"
                            value="no"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="radio2"
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
                <Col xs="12" md="6">
                  <FormGroup
                    value={departCity}
                    onChange={e => setdepartCity(e.target.value)}
                  >
                    <Label htmlFor="depart">Departure City</Label>
                    <Input
                      type="text"
                      id="depart"
                      invalid={departCityInvalid}
                    />
                    <FormFeedback invalid={departCityInvalid}>
                      Departure City is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={destinations}
                    onChange={e => setDestinations(e.target.value)}
                  >
                    <Label htmlFor="destinations">Destination(s)</Label>
                    <Input
                      type="text"
                      id="destinations"
                      invalid={destinationsInvalid}
                    />
                    <FormFeedback invalid={destinationsInvalid}>
                      Destination(s) is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    row
                    value={departDate}
                    onChange={e => setdepartDate(e.target.value)}
                  >
                    <Col md="2">
                      <Label htmlFor="depart-input">Departure Date</Label>
                    </Col>
                    <Col xs="12" md="10">
                      <Input
                        type="date"
                        id="depart-input"
                        name="depart-input"
                        placeholder="date"
                        invalid={departDateInvalid}
                      />
                      <FormFeedback invalid={departDateInvalid}>
                        Departure Date is Required
                      </FormFeedback>
                      <FormText className="help-block">
                        Close-in Ticketing Fee: requests submitted less than 90
                        days before departure will incur an additional charge of
                        $100
                      </FormText>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="4">
                      <Label>Flexible on departure?</Label>
                    </Col>
                    <Col md="8">
                      <FormGroup
                        check
                        className="radio"
                        value={flexDepartDate}
                        onChange={e => setflexDepartDate(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="departYes"
                            name="departYes"
                            value="yes"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="departYes"
                          >
                            Yes
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="departNo"
                            name="departNo"
                            value="no"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="departNo"
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
                <Col xs="12" md="6">
                  <FormGroup
                    row
                    value={returnDate}
                    onChange={e => setreturnDate(e.target.value)}
                  >
                    <Col md="2">
                      <Label htmlFor="return-input">Return Date</Label>
                    </Col>
                    <Col xs="12" md="10">
                      <Input
                        type="date"
                        id="return-input"
                        name="return-input"
                        placeholder="date"
                        invalid={returnDateInvalid}
                      />
                      <FormFeedback invalid={returnDateInvalid}>
                        Return Date is Required
                      </FormFeedback>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="4">
                      <Label>Flexible on return?</Label>
                    </Col>
                    <Col md="8">
                      <FormGroup
                        check
                        className="radio"
                        value={flexReturnDate}
                        onChange={e => setflexReturnDate(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="returnYes"
                            name="radios"
                            value="option1"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="returnYes"
                          >
                            Yes
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="returnNo"
                            name="radios"
                            value="option2"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="returnNo"
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
                <Col xs="12" md="6">
                  <FormGroup
                    value={preferred}
                    onChange={e => setPreffered(e.target.value)}
                  >
                    <Label htmlFor="preferredClass">Preferred Class</Label>
                    <Input
                      type="select"
                      name="preferredClass"
                      id="preferredClass"
                    >
                      <option value="0">Please select</option>
                      <option value="1">Economy</option>
                      <option value="2">Business/First</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={passengers}
                    onChange={e => setPassengers(e.target.value)}
                  >
                    <Label htmlFor="passengers">How Many Passengers?</Label>
                    <Input
                      type="text"
                      id="passengers"
                      invalid={passengersInvalid}
                    />
                    <FormFeedback invalid={passengersInvalid}>
                      Passengers is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup
                    value={passNames}
                    onChange={e => setpassNames(e.target.value)}
                  >
                    <Label htmlFor="passengerNames">Passenger Name(s)</Label>
                    <Input
                      type="text"
                      id="passengerNames"
                      invalid={passNamesInvalid}
                    />
                    <FormFeedback invalid={passNamesInvalid}>
                      Passenger Name(s) is Required
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup
                    value={bags}
                    onChange={e => setBags(e.target.value)}
                  >
                    <Label htmlFor="bags">
                      How many total bags will you be checking?
                    </Label>
                    <Input type="text" id="bags" invalid={bagsInvalid} />
                    <FormFeedback invalid={bagsInvalid}>
                      Bags is Required
                    </FormFeedback>
                    <FormText className="help-block">
                      Certain airlines may charge an additional fee for checked
                      bags
                    </FormText>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup
                    row
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                  >
                    <Col md="3">
                      <Label htmlFor="notes">Notes/Instructions</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        name="notes"
                        id="notes"
                        rows="3"
                        placeholder="Please include any information that is applicable to your trip"
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

export default RequestFlights;
