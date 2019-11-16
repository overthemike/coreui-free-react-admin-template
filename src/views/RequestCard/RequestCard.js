import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';

function RequestCard() {
    return (
      <>
      <Col>
        <Card>
          <CardHeader>
            <strong>Member Credit Card Inquiry</strong>
          </CardHeader>
          <CardBody>
            Ready for a new credit card? Question about an existing card? Submit your request and we'll analyze your profile and provide options for your next move.
            <hr/>
            <Row>
              <Col xs="12" md='6'>
                <FormGroup>
                  <Label htmlFor="fname">First Name</Label>
                  <Input type="text" id="fname" placeholder="Enter your first name" required />
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
                <FormGroup>
                  <Label htmlFor="lname">Last Name</Label>
                  <Input type="text" id="lname" placeholder="Enter your last name" required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md="12">
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="example@example.com" required />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs="12" md='6'>
                <FormGroup>
                    <Label htmlFor="inquiry">My Inquiry</Label>
                    <Input type="inquiry" name="inquiry" id="inquiry">
                      <option value="0">Please select</option>
                      <option value="1">I'm ready for a new card</option>
                      <option value="2">Questions about an existing card</option>
                      <option value="2">Something Else(describe below)</option>
                    </Input>
                </FormGroup>
              </Col>
              <Col xs="12" md='6'>
                <FormGroup row>
                  <Col md="4">
                    <Label>Is your Easy Go Wallet up to date?</Label>
                  </Col>
                  <Col md="8">
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="walletYes" name="radios" value="option1" />
                      <Label check className="form-check-label" htmlFor="walletYes">Yes</Label>
                    </FormGroup>
                    <FormGroup check className="radio">
                      <Input className="form-check-input" type="radio" id="walletNo" name="radios" value="option2" />
                      <Label check className="form-check-label" htmlFor="walletNo">No</Label>
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
                    <Input type="textarea" name="notes" id="notes" rows="3" />
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

export default RequestCard;
