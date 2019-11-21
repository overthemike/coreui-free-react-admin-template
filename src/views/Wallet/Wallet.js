import React from 'react';
import {
Row,
Badge,
Col,
Card,
CardBody,
CardHeader,
ListGroupItem,
ListGroup,
} from 'reactstrap';
import Widget02 from "../Widgets/Widget02"


function Wallet() {
  return (
    <div className="animated fadeIn">
      <Row>
       <div className="mx-auto">
          <h1>Welcome, JJ</h1>
        </div>
      </Row>
      <Row>
      <div className="mx-auto mb-4">
          <h5>This is the title text for the Easy go wallet and it will say something great</h5>
        </div>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              Upcoming Fees
              <div className="card-header-actions">
                <Badge color="success" className="float-right">4</Badge>
              </div>
            </CardHeader>
            <CardBody>
              <ListGroup>
                <ListGroupItem action color="success"><i className="fab fa-cc-visa fa-lg"></i> Chase Sapphire</ListGroupItem>
                <ListGroupItem action color="info"><i className="fab fa-cc-mastercard fa-lg"></i> Barclays AAdvantage Aviator Red World Elite MasterCard</ListGroupItem>
                <ListGroupItem action color="warning"><i className="fab fa-cc-amex fa-lg"></i> American Express Platinum</ListGroupItem>
                <ListGroupItem action color="danger"><i className="fab fa-cc-discover fa-lg"></i> Discover Orange Banana Card</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              Active Spending
              <div className="card-header-actions">
                <Badge color="success" className="float-right">2</Badge>
              </div>
            </CardHeader>
            <CardBody>
              <ListGroup>
                <ListGroupItem action color="success"><i className="fab fa-cc-visa fa-lg"></i> Chase Sapphire</ListGroupItem>
                <ListGroupItem action color="info"><i className="fab fa-cc-mastercard fa-lg"></i> Barclays AAdvantage Aviator Red World Elite MasterCard</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              5/24 Companion
              <div className="card-header-actions">
                <Badge color="success" className="float-right">5</Badge>
              </div>
            </CardHeader>
            <CardBody>
              <ListGroup>
                <ListGroupItem action color="success"><i className="fab fa-cc-visa fa-lg"></i> Chase Sapphire</ListGroupItem>
                <ListGroupItem action color="info"><i className="fab fa-cc-mastercard fa-lg"></i> Barclays AAdvantage Aviator Red World Elite MasterCard</ListGroupItem>
                <ListGroupItem action color="warning"><i className="fab fa-cc-amex fa-lg"></i> American Express Platinum</ListGroupItem>
                <ListGroupItem action color="danger"><i className="fab fa-cc-discover fa-lg"></i> Discover Orange Banana Card</ListGroupItem>
                <ListGroupItem action color="success"><i className="fab fa-cc-visa fa-lg"></i> Chase Sapphire</ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card>
            <CardHeader>
              5/24 Member
              <div className="card-header-actions">
                <Badge color="success" className="float-right">0</Badge>
              </div>
            </CardHeader>
            <CardBody>
              <Widget02 header="You have no cards" mainText="Please check back" icon="fa fa-credit-card" color="primary" variant="1"/>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Widget02 header="15" mainText="Active Cards" icon="fa fa-credit-card" color="primary" footer link="#/active-cards" />
        </Col>
      </Row>
            
    </div>
  );
}

export default Wallet;
