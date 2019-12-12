import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

function DefaultLayout(props) {
  function loading() {
    return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
  }

  function signOut(e) {
    e.preventDefault();
    props.history.push("/login");
  }
  return (
    <div className="app bg-dark">
      <AppHeader fixed className="bg-secondary">
        <Suspense fallback={loading()} className="bg-secondary">
          <DefaultHeader onLogout={e => signOut(e)} className="bg-secondary" />
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg" className="bg-secondary">
          <AppSidebarHeader className="bg-secondary" />
          <AppSidebarForm className="bg-secondary" />
          <Suspense className="bg-secondary">
            <AppSidebarNav
              navConfig={navigation}
              {...props}
              router={router}
              className="bg-secondary"
            />
          </Suspense>
          <AppSidebarFooter className="bg-secondary" />
          <AppSidebarMinimizer className="bg-secondary" />
        </AppSidebar>
        <main className="main">
          <Container fluid>
            <Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/wallet" />
              </Switch>
            </Suspense>
          </Container>
        </main>
        <AppAside fixed className="bg-secondary">
          <Suspense fallback={loading()}>
            <DefaultAside />
          </Suspense>
        </AppAside>
      </div>
      <AppFooter className="bg-secondary">
        <Suspense fallback={loading()} className="bg-secondary">
          <DefaultFooter className="bg-secondary" />
        </Suspense>
      </AppFooter>
    </div>
  );
}

export default DefaultLayout;
