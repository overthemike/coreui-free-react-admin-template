import React, { useState } from "react";
import {
  Row,
  Table,
  Card,
  CardBody,
  CardHeader,
  Button,
  Collapse,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
import RequestCard from "../RequestCard/RequestCard";
import { useWallet } from "../../hooks";

function ManageWallet(props) {
  const [accordion, setAccordion] = useState([true, false, false]);
  const [modal, setModal] = useState(false);
  const { cards } = useWallet();

  function toggleAccordion(tab) {
    const prevState = accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setAccordion(state);
  }
  function toggle() {
    setModal(!modal);
  }
  return (
    <>
      <Button onClick={toggle} className="mr-1">
        New Card
      </Button>
      <div id="accordion">
        <Card className="mb-0">
          <CardHeader id="headingThree">
            <Button
              block
              color="link"
              className="text-left m-0 p-0"
              onClick={() => toggleAccordion(2)}
              aria-expanded={accordion[2]}
              aria-controls="collapseThree"
            >
              <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
            </Button>
          </CardHeader>
          <Collapse
            isOpen={accordion[2]}
            data-parent="#accordion"
            id="collapseThree"
          >
            <CardBody>
              3. Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
      </div>
      <Row>
        <Col>
          <Table responsive striped>
            <thead>
              <tr>
                <th>Username</th>
                <th>Date registered</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cards.map(card => (
                <tr key={card.id}>
                  <td>{card.name}</td>
                  <td>{card.type}</td>
                  <td>
                    <button className="button muted-button">Edit</button>
                    <button className="button muted-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <PaginationItem disabled>
              <PaginationLink previous tag="button">
                Prev
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink tag="button">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink tag="button">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next tag="button">
                Next
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>Member Credit Card Inquiry</ModalHeader>
        <ModalBody>
          <RequestCard />
        </ModalBody>
      </Modal>
    </>
  );
}
export default ManageWallet;
