import React, { useState } from "react";
import {
  Jumbotron,
  Button,
  Card,
  CardBody,
  CardHeader,
  Collapse
} from "reactstrap";

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
      <Jumbotron className="bg-dark">
        <h1 className="display-3">TravelWealth Classroom</h1>
      </Jumbotron>
      <CardBody>
        <div id="accordion">
          <Card className="mb-0 bg-light">
            <CardHeader id="headingOne">
              <Button
                block
                color="link"
                className="text-left m-0 p-0"
                onClick={() => toggleAccordion(0)}
                aria-expanded={accordion[0]}
                aria-controls="collapseOne"
              >
                <h4 className="m-0 p-0">Credit Card Information</h4>
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
                          className="d-flex justify-content-around"
                          key={obj.id + 21}
                        >
                          <div key={obj.id + 1}>{obj.title}</div>
                          <div key={obj.id + 2}>{obj.date}</div>
                          <div key={obj.id + 3}>{obj.desc}</div>
                          <a href={obj.resource} key={obj.id + 4}>
                            Click here to view
                          </a>
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
                className="text-left m-0 p-0"
                onClick={() => toggleAccordion(1)}
                aria-expanded={accordion[1]}
                aria-controls="collapseTwo"
              >
                <h4 className="m-0 p-0">Shopping Information</h4>
              </Button>
            </CardHeader>
            <Collapse
              isOpen={accordion[1]}
              data-parent="#accordion"
              id="collapseTwo"
            >
              <CardBody>
                {shoppingInfo
                  ? shoppingInfo.map(function(obj) {
                      return (
                        <div
                          className="d-flex justify-content-around"
                          key={obj.id + 21}
                        >
                          <div key={obj.id + 1}>{obj.title}</div>
                          <div key={obj.id + 2}>{obj.date}</div>
                          <div key={obj.id + 3}>{obj.desc}</div>
                          <a href={obj.resource} key={obj.id + 4}>
                            Click here to view
                          </a>
                        </div>
                      );
                    })
                  : "There are no posts just yet, check back soon!"}
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-0 bg-light">
            <CardHeader id="headingThree">
              <Button
                block
                color="link"
                className="text-left m-0 p-0"
                onClick={() => toggleAccordion(2)}
                aria-expanded={accordion[2]}
                aria-controls="collapseThree"
              >
                <h4 className="m-0 p-0">Travel Booking Information</h4>
              </Button>
            </CardHeader>
            <Collapse
              isOpen={accordion[2]}
              data-parent="#accordion"
              id="collapseThree"
            >
              <CardBody>
                {travelBookingInfo
                  ? travelBookingInfo.map(function(obj) {
                      return (
                        <div
                          className="d-flex justify-content-around"
                          key={obj.id + 21}
                        >
                          <div key={obj.id + 1}>{obj.title}</div>
                          <div key={obj.id + 2}>{obj.date}</div>
                          <div key={obj.id + 3}>{obj.desc}</div>
                          <a href={obj.resource} key={obj.id + 4}>
                            Click here to view
                          </a>
                        </div>
                      );
                    })
                  : "There are no posts just yet, check back soon!"}
              </CardBody>
            </Collapse>
          </Card>
          <Card className="mb-0 bg-light">
            <CardHeader id="headingFour">
              <Button
                block
                color="link"
                className="text-left m-0 p-0"
                onClick={() => toggleAccordion(3)}
                aria-expanded={accordion[3]}
                aria-controls="collapseFour"
              >
                <h4 className="m-0 p-0">Travel Guides</h4>
              </Button>
            </CardHeader>
            <Collapse
              isOpen={accordion[3]}
              data-parent="#accordion"
              id="collapseFour"
            >
              <CardBody>
                {travelGuides
                  ? travelGuides.map(function(obj) {
                      return (
                        <div
                          className="d-flex justify-content-around"
                          key={obj.id + 21}
                        >
                          <div key={obj.id + 1}>{obj.title}</div>
                          <div key={obj.id + 2}>{obj.date}</div>
                          <div key={obj.id + 3}>{obj.desc}</div>
                          <a href={obj.resource} key={obj.id + 4}>
                            Click here to view
                          </a>
                        </div>
                      );
                    })
                  : "There are no posts just yet, check back soon!"}
              </CardBody>
            </Collapse>
          </Card>
        </div>
      </CardBody>
    </>
  );
}

export default Classroom;
