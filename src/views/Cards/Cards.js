import React, { useState, useMemo, useCallback } from "react";
import DataTable from "react-data-table-component";
import { useAdminCards } from "../../hooks";
import { Button, Modal, ModalBody, ModalHeader, Input } from "reactstrap";

function Cards(props) {
  const { adminCards } = useAdminCards();
  const [pending, setPending] = React.useState(true);
  const [singleCard, setSingleCard] = useState("");
  const handleAction = value => setSingleCard(value);
  const updateState = useCallback(state => handleRowClick(state));
  const [modal2, setModal2] = useState(false);
  const [modal, setModal] = useState(false);
  const data2 = adminCards;
  const [filterText, setFilterText] = React.useState("");
  const columns2 = useMemo(() => [
    {
      name: "Name",
      selector: "name",
      sortable: true
    },
    {
      name: "Account Holder",
      selector: "bonus_amount",
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
    },
    {
      cell: () => <Button onClick={handleAction}>Action</Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ]);
  function handleRowClick(row, event) {
    if (`event.type === 'contextmenu'`) {
      setSingleCard(row);
      toggle2(row);
    }
  }
  function handleDelete(row) {
    console.log("DLEETE", row);
  }
  const CustomLoader = () => (
    <div>
      <i className="fas fa-circle-notch fa-spin fa-5x text-secondary"></i>
    </div>
  );

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  function toggle2(row) {
    setModal2(!modal2);
  }
  function toggle(row) {
    setModal(!modal);
  }
  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <Input
        id="search"
        type="text"
        placeholder="Filter By Name"
        value={filterText}
        onChange={onFilter}
      />
      <Button
        className="btn btn-outline-secondary text-light"
        onClick={onClear}
      >
        X
      </Button>
    </>
  );

  const filteredItems = data2.filter(
    item => item.name && item.name.includes(filterText)
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText]);
  return (
    <>
      <DataTable
        data={filteredItems}
        pagination
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        title="Card Listing"
        columns={columns2}
        progressPending={pending}
        progressComponent={<CustomLoader />}
        onRowClicked={updateState}
        highlightOnHover
        persistTableHead
      />
      <Modal isOpen={modal2} toggle={toggle2} className={props.className}>
        <ModalHeader toggle={toggle2} className="d-flex">
          <i className="fas fa-plus"></i> Add a new card
        </ModalHeader>
        <ModalBody>
          {singleCard.name}
          <Button onClick={handleDelete(singleCard)}>Delete</Button>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Cards;
