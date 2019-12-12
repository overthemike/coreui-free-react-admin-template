import React from "react";
// import {
//   ListGroup,
//   ListGroupItem,
//   ListGroupItemHeading,
//   ListGroupItemText,
//   Jumbotron
// } from "reactstrap";
import DataTable from "react-data-table-component";
import { useUsers } from "../../hooks";

function Users(props) {
  const { users } = useUsers();
  const data = users;
  const [pending, setPending] = React.useState(true);

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

  const columns = [
    {
      name: "First Name",
      selector: "first_name",
      sortable: true
    },
    {
      name: "Last Name",
      selector: "last_name",
      sortable: true
    },
    {
      name: "Email",
      selector: "email",
      sortable: true
    }
  ];
  return (
    <>
      <DataTable
        title="Users"
        columns={columns}
        data={data}
        progressPending={pending}
        progressComponent={<CustomLoader />}
      />
    </>
  );
}

export default Users;
