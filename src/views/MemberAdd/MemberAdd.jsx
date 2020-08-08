import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { MemberForm } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

function MemberAdd() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={12}>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <MemberForm />
        </Grid>
      </Grid>
    </div>
  );
}

MemberAdd.propTypes = {};

export default MemberAdd;
