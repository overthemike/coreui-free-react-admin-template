import React from "react";
import {
  Row,
  Badge,
  Col,
  Card,
  CardBody,
  CardHeader,
  ListGroupItem,
  ListGroup
} from "reactstrap";
import Widget02 from "../Widgets/Widget02";
import card from "../../assets/img/card.jpg";
import requestCard from "../../assets/img/requestCard.jpg";
import plane from "../../assets/img/plane.jpg";
import hotel from "../../assets/img/hotel.jpg";
import schedule from "../../assets/img/schedule.jpg";
import classRoom from "../../assets/img/classRoom.jpg";

function Wallet() {
  return (
    <div className="animated fadeIn">
      <Row>
        <div className="mx-auto">
          <h1>Welcome, JJ</h1>
        </div>
      </Row>
      <Row>
        <div className="mx-auto mb-5">
          <h5>
            This is the title text for the Easy go wallet and it will say
            something great
          </h5>
        </div>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="4">
          <Card className="card card-blog">
            <div className="card-image">
              <a href="/#">
                <img className="card-img" src={card} alt="yep" />
                <div className="card-caption">Manage Cards</div>
              </a>
            </div>
            <div className="table">
              <h6 className="category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="card card-blog">
            <div className="card-image">
              <a href="/#">
                <img className="card-img" src={requestCard} alt="yep" />
                <div className="card-caption">Request a Card</div>
              </a>
            </div>
            <div className="table">
              <h6 className="category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="card card-blog">
            <div className="card-image">
              <a href="/#">
                <img className="card-img" src={classRoom} alt="yep" />
                <div className="card-caption">Classroom</div>
              </a>
            </div>
            <div className="table">
              <h6 className="category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="4">
          <Card className="card card-blog">
            <div className="card-image">
              <a href="/#">
                <img className="card-img" src={plane} alt="yep" />
                <div className="card-caption">Request Flight Booking</div>
              </a>
            </div>
            <div className="table">
              <h6 className="category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="card card-blog">
            <div className="card-image">
              <a href="/#">
                <img className="card-img" src={hotel} alt="yep" />
                <div className="card-caption">Request Hotel Booking</div>
              </a>
            </div>
            <div className="table">
              <h6 className="category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="card card-blog">
            <div className="card-image">
              <a href="/#">
                <img className="card-img" src={schedule} alt="yep" />
                <div className="card-caption">Schedule a Check-In</div>
              </a>
            </div>
            <div className="table">
              <h6 className="category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wallet;
