import React from "react";

const Wallet = React.lazy(() => import("./views/Wallet/Wallet"));
const Classroom = React.lazy(() => import("./views/Classroom"));
const RequestFlights = React.lazy(() => import("./views/RequestFlights"));
const RequestHotel = React.lazy(() => import("./views/RequestHotel"));
const RequestCard = React.lazy(() =>
  import("./views/RequestForms/RequestCard")
);
const ManageWallet = React.lazy(() => import("./views/ManageWallet"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: "/wallet", exact: true, name: "Wallet", component: Wallet },
  { path: "/classroom", exact: true, name: "Classroom", component: Classroom },
  {
    path: "/request-flights",
    exact: true,
    name: "Request Flights",
    component: RequestFlights
  },
  {
    path: "/request-hotel",
    exact: true,
    name: "Request Hotel",
    component: RequestHotel
  },
  {
    path: "/request-card",
    exact: true,
    name: "Request a Card",
    component: RequestCard
  },
  {
    path: "/manage-wallet",
    exact: true,
    name: "Manage Wallet",
    component: ManageWallet
  },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User }
];

export default routes;
