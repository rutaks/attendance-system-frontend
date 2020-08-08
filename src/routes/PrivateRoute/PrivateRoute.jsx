import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { JWT_TOKEN } from "../../helpers/constantHelper";
import { LoadingPage, Main } from "../../layouts";
import pages from "../pages";
import RoleBasedRoute from "../RoleBasedRoute/RoleBasedRoute";

const Dashboard = React.lazy(() => import("../../views/Dashboard"));
const NotFound = React.lazy(() => import("../../layouts/NotFound"));

function PrivateRoute(props) {
  if (!localStorage.getItem(JWT_TOKEN)) return <Redirect to="/login" />;
  return (
    <Main>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <RoleBasedRoute
            exact
            path={pages.dashboard.url}
            name={pages.dashboard.name}
            component={Dashboard}
            roles={["ADMIN"]}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Main>
  );
}

PrivateRoute.propTypes = {};

export default PrivateRoute;
