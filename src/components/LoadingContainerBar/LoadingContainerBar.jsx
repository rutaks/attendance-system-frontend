import React from "react";
import PropTypes from "prop-types";
import { LinearProgress } from "@material-ui/core";

const LoadingContainerBar = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return <LinearProgress color="secondary" />;
};

LoadingContainerBar.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingContainerBar;
