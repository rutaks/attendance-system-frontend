import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { LoadingPage } from "../layouts";

const SignIn = React.lazy(() => import("../views/SignIn"));
const PrivateRoute = React.lazy(() => import("./PrivateRoute"));

export default function Routes() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route path="/login" name="Login" component={SignIn} />
        <Route path="/" name="PrivateRoute" component={PrivateRoute} />
      </Switch>
    </Suspense>
  );
}
