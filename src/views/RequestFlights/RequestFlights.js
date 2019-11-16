import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from 'reactstrap';

function RequestFlights() {
    return (
      <>
      <Col>
        <Card>
          <CardHeader>
            <strong>Request a Flight</strong>
          </CardHeader>
          <CardBody>
            <Row>
              <Col xs="12" md='4'>
                <FormGroup>
                  <Label htmlFor="fname">First Name</Label>
                  <Input type="text" id="fname" placeholder="Enter your first name" required />
                </FormGroup>
              </Col>
              <Col xs="12" md='4'>
                <FormGroup>
                  <Label htmlFor="lname">Last Name</Label>
                  <Input type="text" id="lname" placeholder="Enter your last name" required />
                </FormGroup>
              </Col>
              <Col xs="12" md="4">
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="example@example.com" required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              
            </Row>
            <Row>
              <Col xs="12" md='6'>
                <FormGroup row>
                  <Col md="2">
                    <Label>Routing</Label>
                  </Col>
                  <Col md="10">
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="roundTrip" name="radios" value="option1" />
                      <Label check className="form-check-label" htmlFor="roundTrip">Roundtrip</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="oneWay" name="radios" value="option2" />
                      <Label check className="form-check-label" htmlFor="oneWay">One-way</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="multiCity" name="radios" value="option3" />
                      <Label check className="form-check-label" htmlFor="multiCity">Multi-city</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
                <FormGroup row>
                  <Col md="4">
                    <Label>Flexible on routing?</Label>
                  </Col>
                  <Col md="8">
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio1" name="radios" value="option1" />
                      <Label check className="form-check-label" htmlFor="radio1">Yes</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="radio2" name="radios" value="option2" />
                      <Label check className="form-check-label" htmlFor="radio2">No</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md='6'>
                <FormGroup>
                  <Label htmlFor="depart">Departure City</Label>
                  <Input type="text" id="depart" required />
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
                <FormGroup>
                  <Label htmlFor="destinations">Destination(s)</Label>
                  <Input type="text" id="destinations" required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md='6'>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="depart-input">Departure Date</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <Input type="date" id="depart-input" name="depart-input" placeholder="date" />
                    <FormText className="help-block">Close-in Ticketing Fee: requests submitted less than 90 days before departure will incur an additional charge of $100</FormText>
                  </Col>
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
              <FormGroup row>
                  <Col md="4">
                    <Label>Flexible on departure?</Label>
                  </Col>
                  <Col md="8">
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="departYes" name="radios" value="option1" />
                      <Label check className="form-check-label" htmlFor="departYes">Yes</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="departNo" name="radios" value="option2" />
                      <Label check className="form-check-label" htmlFor="departNo">No</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md='6'>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="return-input">Return Date</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <Input type="date" id="return-input" name="return-input" placeholder="date" />
                  </Col>
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
                <FormGroup row>
                  <Col md="4">
                    <Label>Flexible on return?</Label>
                  </Col>
                  <Col md="8">
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="returnYes" name="radios" value="option1" />
                      <Label check className="form-check-label" htmlFor="returnYes">Yes</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="returnNo" name="radios" value="option2" />
                      <Label check className="form-check-label" htmlFor="returnNo">No</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md='6'>
                <FormGroup>
                    <Label htmlFor="preferredClass">Preferred Class</Label>
                    <Input type="select" name="preferredClass" id="preferredClass">
                      <option value="0">Please select</option>
                      <option value="1">Economy</option>
                      <option value="2">Business/First</option>
                    </Input>
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
                <FormGroup>
                  <Label htmlFor="passengers">How Many Passengers?</Label>
                  <Input type="text" id="passengers" required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Col xs="12" md='6'>
                <FormGroup>
                  <Label htmlFor="passengerNames">Passenger Name(s)</Label>
                  <Input type="text" id="passengerNames" required />
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
                <FormGroup>
                  <Label htmlFor="bags">How many total bags will you be checking?</Label>
                  <Input type="text" id="bags" required />
                  <FormText className="help-block">Certain airlines may charge an additional fee for checked bags</FormText>
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
                    <Input type="textarea" name="notes" id="notes" rows="3"
                            placeholder="Please include any information that is applicable to your trip" />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            </CardBody>
            <CardFooter>
                <Button className="float-right" type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
              </CardFooter>
          </Card>
        </Col>
      </>
    );
  }

export default RequestFlights;
