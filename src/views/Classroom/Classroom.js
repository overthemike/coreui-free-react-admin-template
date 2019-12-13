import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Jumbotron
} from "reactstrap";

function Classroom() {
  return (
    <>
      <Jumbotron className="bg-dark">
        <h1 className="display-3">Easy Go Classroom</h1>
      </Jumbotron>
      <ListGroup className="mb-5">
        <ListGroupItem action tag="a" href="#" className="bg-light">
          <ListGroupItemHeading className="text-primary">
            Using your Membership
          </ListGroupItemHeading>
          <ListGroupItemText className="text-primary"></ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#" className="bg-light">
          <ListGroupItemHeading className="text-primary">
            Credit Card Info
          </ListGroupItemHeading>
          <ListGroupItemText className="text-primary">
            How to apply, reconsideration lines, retention offers, using
            perks/benefits, etc
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#" className="bg-light">
          <ListGroupItemHeading className="text-primary">
            Shopping Info
          </ListGroupItemHeading>
          <ListGroupItemText className="text-primary">
            Plastiq, MPX, Rakuten, etc.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#" className="bg-light">
          <ListGroupItemHeading className="text-primary">
            Travel booking Info
          </ListGroupItemHeading>
          <ListGroupItemText className="text-primary">
            booking domestic flights, booking hotels, etc
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#" className="bg-light">
          <ListGroupItemHeading className="text-primary">
            Travel Guides
          </ListGroupItemHeading>
          <ListGroupItemText className="text-primary">
            airport/lounge info, city guides
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default Classroom;
