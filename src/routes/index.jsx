import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { LoadingPage } from "../layouts";
import pages from "./pages";

const SignIn = React.lazy(() => import("../views/SignIn"));
const PrivateRoute = React.lazy(() => import("./PrivateRoute"));
const NotFound = React.lazy(() => import("../layouts/NotFound"));

export default function Routes() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route
          path={pages.login.url}
          name={pages.login.name}
          component={SignIn}
        />
        <Route path="/" name="PrivateRoute" component={PrivateRoute} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
