import React, { useState } from "react";
import {
  Jumbotron,
  Button,
  Card,
  CardBody,
  CardHeader,
  Collapse,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import moment from "moment";
import pic from "../../assets/img/brand/logo.svg";

import { useClassroom } from "../../hooks";

function Classroom() {
  const classes = useClassroom();
  const data = classes.classes;
  let creditInfo = data
    ? data.filter(function(obj) {
        return obj.category === "credit_card_info";
      })
    : "";
  let shoppingInfo = data
    ? data.filter(function(obj) {
        return obj.category === "shopping_info";
      })
    : "";
  let travelBookingInfo = data
    ? data.filter(function(obj) {
        return obj.category === "travel_booking_info";
      })
    : "";
  let travelGuides = data
    ? data.filter(function(obj) {
        return obj.category === "travel_guides";
      })
    : "";
  const [accordion, setAccordion] = useState([true, false, false, false]);
  function toggleAccordion(tab) {
    const prevState = accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setAccordion(state);
  }

  return (
    <>
      <Jumbotron className="bg-dark d-flex">
        <h1 className="display-3">TravelWealth Classroom</h1>
        <img src={pic} alt="travelWealth" className="classLogo" />
      </Jumbotron>
      <CardBody>
        <div id="accordion">
          <Card className="mb-0 bg-light">
            <CardHeader id="headingOne">
              <Button
                block
                color="link"
                className="d-flex justify-content-between m-0 p-0"
                onClick={() => toggleAccordion(0)}
                aria-expanded={accordion[0]}
                aria-controls="collapseOne"
              >
                <h4 className="m-0 p-0">
                  <i className="far fa-credit-card text-secondary mr-2"></i>
                  Credit Card Information
                </h4>
                <i className="fas fa-chevron-right text-secondary"></i>
              </Button>
            </CardHeader>
            <Collapse
              isOpen={accordion[0]}
              data-parent="#accordion"
              id="collapseOne"
              aria-labelledby="headingOne"
            >
              <CardBody>
                {creditInfo
                  ? creditInfo.map(function(obj) {
                      return (
                        <div
                          className="d-flex justify-content-around align-items-center bg-light"
                          key={obj.id + 21}
                        >
                          {/* <div key={obj.id + 1}>{obj.title}</div>
                            <div key={obj.id + 2}>
                              {moment(obj.date, "YYYYMMDD").fromNow()}
                            </div>
                            <a
                              className="btn btn-outline-secondary"
                              href={obj.resource}
                              key={obj.id + 4}
                            >
                              Click here to view
                            </a> */}
                          <object
                            width="1000"
                            height="500"
                            type="application/pdf"
                            data={obj.resource}
                          >
                            <p>{obj.title}</p>
                          </object>
                        </div>
                      );
                    })
                  : "There are no posts just yet, check back soon!"}
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-0 bg-light">
            <CardHeader id="headingTwo">
              <Button
                block
                color="link"
                className="d-flex justify-content-between m-0 p-0"
                onClick={() => toggleAccordion(1)}
                aria-expanded={accordion[1]}
                aria-controls="collapseTwo"
              >
                <h4 className="m-0 p-0">
                  <i className="fas fa-shopping-bag text-secondary mr-2"></i>
                  Shopping Information
                </h4>
                <i className="fas fa-chevron-right text-secondary"></i>
              </Button>
            </CardHeader>
            <Collapse
              isOpen={accordion[1]}
              data-parent="#accordion"
              id="collapseTwo"
            >
              <CardBody>
                <ListGroup className="bg-light">
                  {shoppingInfo
                    ? shoppingInfo.map(function(obj) {
                        return (
                          <ListGroupItem
                            className="d-flex justify-content-around align-items-center bg-light"
                            key={obj.id + 21}
                          >
                            <div key={obj.id + 1}>{obj.title}</div>
                            <div key={obj.id + 2}>
                              {moment(obj.date, "YYYYMMDD").fromNow()}
                            </div>
                            <a
                              className="btn btn-outline-secondary"
                              href={obj.resource}
                              key={obj.id + 4}
                            >
                              Click here to view
                            </a>
                          </ListGroupItem>
                        );
                      })
                    : "There are no posts just yet, check back soon!"}
                </ListGroup>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-0 bg-light">
            <CardHeader id="headingThree">
              <Button
                block
                color="link"
                className="d-flex justify-content-between m-0 p-0"
                onClick={() => toggleAccordion(2)}
                aria-expanded={accordion[2]}
                aria-controls="collapseThree"
              >
                <h4 className="m-0 p-0">
                  <i className="fas fa-plane text-secondary mr-2"></i>Travel
                  Booking Information
                </h4>
                <i className="fas fa-chevron-right text-secondary"></i>
              </Button>
            </CardHeader>
            <Collapse
              isOpen={accordion[2]}
              data-parent="#accordion"
              id="collapseThree"
            >
              <CardBody>
                <ListGroup className="bg-light">
                  {travelBookingInfo
                    ? travelBookingInfo.map(function(obj) {
                        return (
                          <ListGroupItem
                            className="d-flex justify-content-around align-items-center bg-light"
                            key={obj.id + 21}
                          >
                            <div key={obj.id + 1}>{obj.title}</div>
                            <div key={obj.id + 2}>
                              {moment(obj.date, "YYYYMMDD").fromNow()}
                            </div>
                            <a
                              className="btn btn-outline-secondary"
                              href={obj.resource}
                              key={obj.id + 4}
                            >
                              Click here to view
                            </a>
                          </ListGroupItem>
                        );
                      })
                    : "There are no posts just yet, check back soon!"}
                </ListGroup>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-0 bg-light">
            <CardHeader id="headingFour">
              <Button
                block
                color="link"
                className="d-flex justify-content-between m-0 p-0"
                onClick={() => toggleAccordion(3)}
                aria-expanded={accordion[3]}
                aria-controls="collapseFour"
              >
                <h4 className="m-0 p-0">
                  <i className="fas fa-book-open text-secondary mr-2"></i>Travel
                  Guides
                </h4>
                <i className="fas fa-chevron-right text-secondary"></i>
              </Button>
            </CardHeader>
            <Collapse
              isOpen={accordion[3]}
              data-parent="#accordion"
              id="collapseFour"
            >
              <CardBody>
                <ListGroup className="bg-light">
                  {travelGuides
                    ? travelGuides.map(function(obj) {
                        return (
                          <ListGroupItem
                            className="d-flex justify-content-around align-items-center bg-light"
                            key={obj.id + 21}
                          >
                            <div key={obj.id + 1}>{obj.title}</div>
                            <div key={obj.id + 2}>
                              {moment(obj.date, "YYYYMMDD").fromNow()}
                            </div>
                            <a
                              className="btn btn-outline-secondary"
                              href={obj.resource}
                              key={obj.id + 4}
                            >
                              Click here to view
                            </a>
                          </ListGroupItem>
                        );
                      })
                    : "There are no posts just yet, check back soon!"}
                </ListGroup>
              </CardBody>
            </Collapse>
          </Card>
        </div>
      </CardBody>
    </>
  );
}

export default Classroom;
