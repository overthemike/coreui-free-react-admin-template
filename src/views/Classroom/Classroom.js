import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Jumbotron,
} from 'reactstrap';

function Classroom() {
    return (
      <>
      <Jumbotron>
        <h1 className="display-3">Easy Go Classroom</h1>
      </Jumbotron>
      <ListGroup className="mb-5">
        <ListGroupItem active action tag="a" href="#">
          <ListGroupItemHeading>Using your Membership </ListGroupItemHeading>
          <ListGroupItemText>

          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Credit Card Info</ListGroupItemHeading>
          <ListGroupItemText>
            How to apply, reconsideration lines, retention offers, using perks/benefits, etc
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Shopping Info</ListGroupItemHeading>
          <ListGroupItemText>
            Plastiq, MPX, Rakuten, etc.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Travel booking Info</ListGroupItemHeading>
          <ListGroupItemText>
           booking domestic flights, booking hotels, etc
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Travel Guides</ListGroupItemHeading>
          <ListGroupItemText>
            airport/lounge info, city guides
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </>
    );
  }

export default Classroom;
