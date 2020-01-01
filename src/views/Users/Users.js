import React from "react";
import DataTable from "react-data-table-component";
import { useUsers } from "../../hooks";
import moment from "moment";

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
    },
    {
      name: "5/24",
      selector: "accountprofile.member_524",
      sortable: true,
      format: row => `${row.accountprofile.member_524.length}`
    },
    {
      name: "Joined",
      selector: "accountprofile.joined",
      sortable: true,
      format: row => `${moment(row.accountprofile.joined).format("lll")}`
    }
  ];
  return (
    <>
      <DataTable
        title="Users"
        columns={columns}
        data={data}
        pagination
        progressPending={pending}
        progressComponent={<CustomLoader />}
      />
    </>
  );
}

export default Users;
