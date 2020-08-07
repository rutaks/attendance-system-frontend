import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const staticLoggedInUserRoles = "ADMIN";

const isUserAllowed = (roles = []) => {
  if (roles.includes(staticLoggedInUserRoles)) {
    return true;
  } else return false;
};

const RoleBasedRoute = ({ component: Component, roles = [], ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isUserAllowed(roles)) {
        return (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: props.location },
            }}
          />
        );
      }
      return <Component {...props} />;
    }}
  />
);

RoleBasedRoute.propTypes = {
  roles: PropTypes.array.isRequired,
};

export default RoleBasedRoute;
