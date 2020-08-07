import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyles } from "./style";
function LoadingPage() {
  const classes = useStyles();
  return <CircularProgress disableShrink className={classes.loader} />;
}

LoadingPage.propTypes = {};

export default LoadingPage;
