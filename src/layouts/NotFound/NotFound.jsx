import React from "react";
import { useStyles } from "./style";
function NotFound() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src="/images/404.png" alt="Not Found" className={classes.loader} />
    </div>
  );
}

NotFound.propTypes = {};

export default NotFound;
