import React from "react";
import { useStyles } from "./style";
import { Member, Service, LatestServices } from "./components";
import { Grid } from "@material-ui/core";

function Dashboard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Member />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Service />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestServices />
        </Grid>
      </Grid>
    </div>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
