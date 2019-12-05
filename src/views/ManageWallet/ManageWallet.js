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
      selector: "card.name",
      sortable: true
    },
    {
      name: "Account Holder",
      selector: "user.first_name",
      sortable: true
    },
    {
      name: "Fee",
      selector: "card.annual_fee",
      sortable: true
    },
    {
      name: "Use For",
      selector: "card.use_for",
      sortable: true
    },
    {
      name: "Features",
      selector: "card.features",
      sortable: true
    },
    {
      name: "Open After",
      selector: "open_after",
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
      <div className="mb-3 mt-3 row ml-1 mr-1">
        <Button onClick={toggle} color="primary" className="mr-1 col">
          <i className="fas fa-info fa-3x mb-1"></i> <br /> Request New Card
        </Button>
        <Button onClick={toggle2} color="success" className="mr-1 col">
          <i className="fas fa-plus fa-3x mb-1"></i> <br /> Add Active card
        </Button>
        <Button
          color="info"
          onClick={toggleAccordion}
          className="mr-1 col text-light"
          id="toggleCollapse1"
        >
          <i className="fa fa-credit-card fa-3x mb-1"></i> <br /> Recommended
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
      <Card>
        <CardBody>
          <DataTable
            title="My Active Cards"
            columns={columns}
            data={data}
            progressPending={pending}
            progressComponent={<CustomLoader />}
          />
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} className="d-flex">
          <i className="fas fa-info"></i> Member Credit Card Inquiry
        </ModalHeader>
        <ModalBody>
          <RequestCard />
        </ModalBody>
      </Modal>
      <Modal isOpen={modal2} toggle={toggle2} className={props.className}>
        <ModalHeader toggle={toggle2} className="d-flex">
          <i className="fas fa-plus"></i> Add a new card
        </ModalHeader>
        <ModalBody>
          <AddCard />
        </ModalBody>
      </Modal>
    </>
  );
}
export default ManageWallet;
