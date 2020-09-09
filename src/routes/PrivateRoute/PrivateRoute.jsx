import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { JWT_TOKEN } from "../../helpers/constantHelper";
import { LoadingPage, Main } from "../../layouts";
import MemberEdit from "../../views/MemberEdit";
import pages from "../pages";
import RoleBasedRoute from "../RoleBasedRoute/RoleBasedRoute";

const Dashboard = React.lazy(() => import("../../views/Dashboard"));
const MemberList = React.lazy(() => import("../../views/MemberList"));
const MemberAdd = React.lazy(() => import("../../views/MemberAdd"));
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
            roles={pages.dashboard.roles}
          >
            <Dashboard />
          </RoleBasedRoute>
          <RoleBasedRoute
            exact
            path={pages.members.url}
            name={pages.members.name}
            roles={pages.members.roles}
          >
            <MemberList />
          </RoleBasedRoute>
          <RoleBasedRoute
            exact
            path={pages.addMember.url}
            name={pages.addMember.name}
            roles={pages.addMember.roles}
          >
            <MemberAdd />
          </RoleBasedRoute>
          <RoleBasedRoute
            exact
            path={pages.editMember.url}
            name={pages.editMember.name}
            roles={pages.editMember.roles}
          >
            {({
              match: {
                params: { memberId },
              },
            }) => <MemberEdit memberId={memberId} />}
          </RoleBasedRoute>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Main>
  );
}

PrivateRoute.propTypes = {};

export default PrivateRoute;
