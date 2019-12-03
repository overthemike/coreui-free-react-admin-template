import React, { useState } from "react";
import {
  Row,
  Card,
  CardBody,
  CardHeader,
  Button,
  Collapse,
  Modal,
  ModalBody,
  ModalHeader
} from "reactstrap";
import RequestCard from "../RequestForms/RequestCard";
import AddCard from "../RequestForms/AddMyCard";
import { useRecCards, useMyCards } from "../../hooks";
import DataTable from "react-data-table-component";

function ManageWallet(props) {
  const [collapse, setCollapse] = useState(false);
  const [pending, setPending] = React.useState(true);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const { recCards } = useRecCards();
  const data2 = recCards;
  const { MyCards } = useMyCards();
  const data = MyCards;
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
  const columns2 = [
    {
      name: "Name",
      selector: "name",
      sortable: true
    },
    {
      name: "Type",
      selector: "type",
      sortable: true
    },
    {
      name: "Fee",
      selector: "annual_fee",
      sortable: true
    },
    {
      name: "Use For",
      selector: "use_for",
      sortable: true
    },
    {
      name: "Features",
      selector: "features",
      sortable: true
    }
  ];
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  function toggle() {
    setModal(!modal);
  }
  function toggle2() {
    setModal2(!modal2);
  }

  function toggleAccordion() {
    setCollapse(!collapse);
  }

  const CustomLoader = () => (
    <div>
      <i className="fas fa-circle-notch fa-spin fa-5x text-secondary"></i>
    </div>
  );
  const style = {
    margin: "-68px 0 0 0"
  };
  return (
    <>
      <div className="mb-3 mt-3">
        <Button onClick={toggle} color="primary" className="mr-1">
          Request New Card
        </Button>
        <Button onClick={toggle2} color="primary" className="mr-1">
          Add Active card
        </Button>
        <Button
          color="primary"
          onClick={toggleAccordion}
          className="mr-1"
          id="toggleCollapse1"
        >
          Recommended Cards
        </Button>
      </div>
      <Card>
        <CardHeader>
          <i className="fa fa-credit-card"></i>
          <strong>Recommended Cards</strong>
        </CardHeader>
        <Collapse isOpen={collapse}>
          <CardBody>
            <DataTable style={style} columns={columns2} data={data2} />
          </CardBody>
        </Collapse>
      </Card>
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
      <Modal isOpen={modal2} toggle={toggle2} className={props.className}>
        <ModalHeader toggle={toggle2}>Add a new card</ModalHeader>
        <ModalBody>
          <AddCard />
        </ModalBody>
      </Modal>
    </>
  );
}
export default ManageWallet;
