import React from "react";
import { Row, Col, Card } from "reactstrap";
import card from "../../assets/img/card.jpg";
import requestCard from "../../assets/img/requestCard.jpg";
import plane from "../../assets/img/plane.jpg";
import hotel from "../../assets/img/hotel.jpg";
import schedule from "../../assets/img/schedule.jpg";
import classRoom from "../../assets/img/classRoom.jpg";

function Wallet() {
  const firstName = localStorage.firstName;

  return (
    <div className="animated fadeIn">
      <Row>
        <div className="mx-auto">
          <h1>Welcome, {firstName}</h1>
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
          <Card className="mainCard mainCard-blog">
            <div className="mainCard-image">
              <a href="#/manage-wallet">
                <img className="img" src={card} alt="yep" />
                <div className="mainCard-caption">Manage Cards</div>
              </a>
            </div>
            <div className="mainCard-table">
              <h6 className="mainCard-category text-info">heading</h6>
              <p>mainCard-category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="mainCard mainCard-blog">
            <div className="mainCard-image">
              <a href="/#">
                <img className="img" src={requestCard} alt="yep" />
                <div className="mainCard-caption">Request a Card</div>
              </a>
            </div>
            <div className="mainCard-table">
              <h6 className="mainCard-category text-info">heading</h6>
              <p>mainCard-category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="mainCard mainCard-blog">
            <div className="mainCard-image">
              <a href="#/classroom">
                <img className="img" src={classRoom} alt="yep" />
                <div className="mainCard-caption">Classroom</div>
              </a>
            </div>
            <div className="mainCard-table">
              <h6 className="mainCard-category text-info">heading</h6>
              <p>mainCard-category text-info</p>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="6" md="4">
          <Card className="mainCard mainCard-blog">
            <div className="mainCard-image">
              <a href="#/request-flights">
                <img className="img" src={plane} alt="yep" />
                <div className="mainCard-caption">Request Flight Booking</div>
              </a>
            </div>
            <div className="mainCard-table">
              <h6 className="mainCard-category text-info">heading</h6>
              <p>mainCard-category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="mainCard mainCard-blog">
            <div className="mainCard-image">
              <a href="#/request-hotel">
                <img className="img" src={hotel} alt="yep" />
                <div className="mainCard-caption">Request Hotel Booking</div>
              </a>
            </div>
            <div className="mainCard-table">
              <h6 className="mainCard-category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4">
          <Card className="mainCard mainCard-blog">
            <div className="mainCard-image">
              <a href="https://calendly.com/easygotraveler/checkin?month=2019-11">
                <img className="img" src={schedule} alt="yep" />
                <div className="mainCard-caption">Schedule a Check-In</div>
              </a>
            </div>
            <div className="mainCard-table">
              <h6 className="mainCard-category text-info">heading</h6>
              <p>category text-info</p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Wallet;
