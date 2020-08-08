import React from "react";
import AuthService from "../../services/AuthService";
import { Redirect } from "react-router-dom";

function Logout(props) {
  function handleLogout() {
    AuthService.logout();
    return <Redirect to="/login" />;
  }
  return <div>{handleLogout()}</div>;
}

Logout.propTypes = {};

export default Logout;
