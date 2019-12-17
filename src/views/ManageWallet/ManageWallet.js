import React, { useState } from "react";
import {
  Col,
  Input,
  Form,
  FormGroup,
  Label,
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
import { useRecCards, useMyCards } from "../../hooks";
import DataTable from "react-data-table-component";
import { useForms } from "../../hooks";

function ManageWallet(props) {
  const [collapse, setCollapse] = useState(false);
  const [pending, setPending] = React.useState(true);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const { recCards } = useRecCards();
  const data2 = recCards;
  const { MyCards } = useMyCards();
  const data = MyCards;
  const [inquiry, setInquiry] = useState("");
  const [wallet_updated, setWallet] = useState("");
  const [notes, setNotes] = useState("");
  const { requestCard } = useForms();
  const [type, setType] = useState("");
  const [date_opened, setDateOpened] = useState("");
  const [status, setStatus] = useState("");
  const [card, setCard] = useState("");
  const { newCard } = useMyCards();

  const columns = [
    {
      name: "",
      selector: "card.image",
      sortable: true,
      maxWidth: "50px",
      cell: row => (
        <img className="tableCards" alt={row.card.name} src={row.card.image} />
      )
    },
    {
      name: "Cards",
      selector: "card.name",
      sortable: true,
      wrap: true
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
      sortable: true,
      wrap: true
    },
    {
      name: "Free Intl",
      selector: "card.free_intl",
      sortable: true,
      format: row => `${row.card.free_intl.toString()}`
    },
    {
      name: "Annual Fee",
      selector: "card.annual_fee",
      sortable: true,
      wrap: true
    }
  ];
  const columns2 = [
    {
      name: "",
      selector: "card.image",
      sortable: true,
      maxWidth: "50px",
      cell: row => (
        <img className="tableCards" alt={row.card.name} src={row.card.image} />
      )
    },
    {
      name: "Cards",
      selector: "card.name",
      sortable: true,
      wrap: true
    },
    {
      name: "Account Holder",
      selector: "user.first_name",
      sortable: true
    },
    {
      name: "Open After",
      selector: "open_after",
      sortable: true
    },
    {
      name: "Use For",
      selector: "card.use_for",
      sortable: true,
      wrap: true
    },
    {
      name: "Features",
      selector: "card.features",
      sortable: true,
      wrap: true
    },
    {
      name: "Fee",
      selector: "card.annual_fee",
      sortable: true,
      format: row => `${"$" + row.card.annual_fee}`
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
  function handleRequestSubmit(e) {
    e.preventDefault();
    requestCard(inquiry, wallet_updated, notes);
    toggle();
  }
  function handleSubmit(e) {
    e.preventDefault();
    newCard(type, date_opened, card, status);
    toggle2();
    window.location.reload();
  }
  const CustomLoader = () => (
    <div>
      <i className="fas fa-circle-notch fa-spin fa-5x text-secondary"></i>
    </div>
  );
  const ActiveExpanded = ({ data }) => (
    <div className="mt-3">
      <p className="text-primary">Annual Notes : {data.card.annual_notes}</p>
      <p className="text-primary">Features : {data.card.features}</p>
    </div>
  );
  const RecommendExpand = ({ data }) => (
    <div className="mt-3">
      <p className="text-primary">Annual Notes : {data.card.annual_notes}</p>
      <p className="text-primary">Features : {data.card.features}</p>
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
          className="mr-1 col text-pimary"
          id="toggleCollapse1"
        >
          <i className="fa fa-credit-card fa-3x mb-1"></i> <br /> Recommended
        </Button>
      </div>
      <Card>
        <CardHeader className="bg-light text-primary">
          <i className="fa fa-credit-card"></i>
          <strong>Recommended Cards</strong>
        </CardHeader>
        <Collapse isOpen={collapse}>
          <CardBody className="bg-light">
            <DataTable
              style={style}
              columns={columns2}
              data={data2}
              stripped
              expandableRows
              expandableRowsComponent={<RecommendExpand />}
            />
          </CardBody>
        </Collapse>
      </Card>
      <Row></Row>
      <Card>
        <CardBody className="bg-light text-primary">
          <DataTable
            title="My Active Cards"
            stripped
            columns={columns}
            data={data}
            progressPending={pending}
            progressComponent={<CustomLoader />}
            expandableRows
            expandableRowsComponent={<ActiveExpanded />}
          />
        </CardBody>
      </Card>
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} className="d-flex">
          <i className="fas fa-info"></i> Member Credit Card Inquiry
        </ModalHeader>
        <ModalBody>
          <Col>
            <p>
              Ready for a new credit card? Question about an existing card?
              Submit your request and we'll analyze your profile and provide
              options for your next move.
            </p>
            <Form onSubmit={handleRequestSubmit}>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label htmlFor="inquiry">My Inquiry</Label>
                    <Input
                      type="select"
                      name="inquiry"
                      id="inquiry"
                      value={inquiry}
                      onChange={e => setInquiry(e.target.value)}
                    >
                      <option value="0">Please select</option>
                      <option value="I'm ready for a new card">
                        I'm ready for a new card
                      </option>
                      <option value="Questions about an existing card">
                        Questions about an existing card
                      </option>
                      <option value="Something Else(describe below)">
                        Something Else(describe below)
                      </option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="8">
                      <Label>Is your Wallet up to date?</Label>
                    </Col>
                    <Col md="4">
                      <FormGroup
                        check
                        className="radio"
                        id="wallet_updated"
                        value={wallet_updated}
                        onChange={e => setWallet(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletYes"
                            name="radios"
                            value="yes"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletYes"
                          >
                            Yes
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="walletNo"
                            name="radios"
                            value="no"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="walletNo"
                          >
                            No
                          </Label>
                        </Row>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="notes">Notes/Instructions</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input
                        type="textarea"
                        name="notes"
                        id="notes"
                        rows="3"
                        value={notes}
                        onChange={e => setNotes(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                </Col>
              </Row>
              <Button
                className="float-right"
                type="submit"
                size="sm"
                color="primary"
              >
                <i className="fa fa-dot-circle-o"></i> Submit
              </Button>
            </Form>
          </Col>
        </ModalBody>
      </Modal>
      <Modal isOpen={modal2} toggle={toggle2} className={props.className}>
        <ModalHeader toggle={toggle2} className="d-flex">
          <i className="fas fa-plus"></i> Add a new card
        </ModalHeader>
        <ModalBody>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup row>
                    <Col md="4">
                      <Label>Status</Label>
                    </Col>
                    <Col md="8">
                      <FormGroup
                        check
                        className="radio"
                        id="status"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                      >
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="statusYes"
                            name="radios"
                            value="active"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="statusYes"
                          >
                            Active
                          </Label>
                        </Row>
                        <Row>
                          <Input
                            className="form-check-input"
                            type="radio"
                            id="statusNo"
                            name="radios"
                            value="inactive"
                          />
                          <Label
                            check
                            className="form-check-label"
                            htmlFor="statusNo"
                          >
                            Inactive
                          </Label>
                        </Row>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label htmlFor="date_opened">Date Opened</Label>
                    <Input
                      type="text"
                      id="date_opened"
                      placeholder="YYYY-MM-DD"
                      value={date_opened}
                      onChange={e => setDateOpened(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label htmlFor="card">Card</Label>
                    <Input
                      type="select"
                      name="card"
                      id="card"
                      value={card}
                      onChange={e => setCard(e.target.value)}
                    >
                      <option>please select</option>
                      {recCards.map(card => (
                        <option key={card.card.id} value={card.card.id}>
                          {card.card.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="12" md="6">
                  <FormGroup>
                    <Label htmlFor="type">Type</Label>
                    <Input
                      type="select"
                      name="type"
                      id="type"
                      value={type}
                      onChange={e => setType(e.target.value)}
                    >
                      <option value="0">Please select</option>
                      <option value="member">Member</option>
                      <option value="companion">Companion</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Button
                className="float-right"
                type="submit"
                size="sm"
                color="primary"
              >
                <i className="fa fa-dot-circle-o"></i> Submit
              </Button>
            </Form>
          </Col>
        </ModalBody>
      </Modal>
    </>
  );
}
export default ManageWallet;
