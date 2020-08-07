import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
  },
  content: {
    minHeight: "100vh",
  },
}));

const Minimal = (props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>{children}</div>
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Minimal;
