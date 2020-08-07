import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { LoadingPage, Main } from "../../layouts";

const Dashboard = React.lazy(() => import("../../views/Dashboard"));

function PrivateRoute(props) {
  return (
    <Main>
      <Suspense fallback={<LoadingPage />}>
        <Switch>
          <Route path="/" name="Dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </Main>
  );
}

PrivateRoute.propTypes = {};

export default PrivateRoute;
