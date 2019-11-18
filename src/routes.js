import React from 'react';

const Charts = React.lazy(() => import('./views/Charts'));
const Wallet = React.lazy(() => import('./views/Wallet/Wallet'));
const Classroom = React.lazy(() => import('./views/Classroom'));
const RequestFlights = React.lazy(() => import('./views/RequestFlights'));
const RequestCard = React.lazy(() => import('./views/RequestCard'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/wallet', name: 'Wallet', component: Wallet },
  { path: '/classroom', name: 'Classroom', component: Classroom },
  { path: '/request-flights', name: 'Request Flights', component: RequestFlights },
  { path: '/request-card', name: 'Request a Card', component: RequestCard },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
