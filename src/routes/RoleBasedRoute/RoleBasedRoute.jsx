import React from "react";
import { Route, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const staticLoggedInUserRoles = "ADMIN";

const isUserAllowed = (roles = []) => {
  if (roles.includes(staticLoggedInUserRoles)) {
    return true;
  } else return false;
};

const RoleBasedRoute = ({ children, roles = [], ...rest }) => {
  const history = useHistory();
  if (!isUserAllowed(roles)) {
    return history.goBack();
  }
  console.log("rest");
  console.log(rest);

  return <Route {...rest}>{children}</Route>;
};

RoleBasedRoute.propTypes = {
  roles: PropTypes.array.isRequired,
};

export default RoleBasedRoute;
