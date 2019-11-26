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
  ModalHeader
} from "reactstrap";
import RequestCard from "../RequestCard/RequestCard";
import { useWallet } from "../../hooks";
import DataTable from "react-data-table-component";

function ManageWallet(props) {
  const [accordion, setAccordion] = useState([true, false, false]);
  const [pending, setPending] = React.useState(true);
  const [modal, setModal] = useState(false);
  const { recCards, myCards } = useWallet();
  const data = myCards;
  const columns = [
    {
      name: "Name",
      selector: "card.name",
      sortable: true
    },
    {
      name: "Type",
      selector: "type",
      sortable: true
    },
    {
      name: "date Open",
      selector: "date_opened",
      sortable: true
    },
    {
      name: "Use For",
      selector: "card.use_for",
      sortable: true
    },
    {
      name: "Free Intl",
      selector: "card.free_intl",
      sortable: true
    },
    {
      name: "Features",
      selector: "card.features",
      sortable: true
    }
  ];
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  function toggleAccordion(tab) {
    const prevState = accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setAccordion(state);
  }

  function toggle() {
    setModal(!modal);
  }

  const CustomLoader = () => (
    <div>
      <i className="fas fa-circle-notch fa-spin fa-5x text-secondary"></i>
    </div>
  );

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
              <h5 className="m-0 p-0">Recommended Cards</h5>
            </Button>
          </CardHeader>
          <Collapse
            isOpen={accordion[2]}
            data-parent="#accordion"
            id="collapseThree"
          >
            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Fee</th>
                    <th>Use For</th>
                    <th>Features</th>
                  </tr>
                </thead>
                <tbody>
                  {recCards.map(card => (
                    <tr key={card.id}>
                      <td>{card.name}</td>
                      <td>{card.type}</td>
                      <td>{card.annual_fee}</td>
                      <td>{card.use_for}</td>
                      <td>{card.features}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Collapse>
        </Card>
      </div>
      <Row></Row>
      <DataTable
        title="My Active Cards"
        columns={columns}
        data={data}
        progressPending={pending}
        progressComponent={<CustomLoader />}
      />

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
