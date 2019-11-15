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
          <ListGroupItemHeading>Getting Started </ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Intro to Powerpoint</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Stacking Points</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Whats in JJ's Wallet</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem action tag="a" href="#">
          <ListGroupItemHeading>Rental Car Tips</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </>
    );
  }

export default Classroom;
