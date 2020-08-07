import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";
import { Minimal } from "../../layouts";
import { useStyles } from "./style";
import SignInForm from "./SignInForm";
import RightPaneView from "./RightPaneView";

function SignIn() {
  const classes = useStyles();
  return (
    <Minimal>
      <LinearProgress />
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <RightPaneView />
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <SignInForm />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Minimal>
  );
}

SignIn.propTypes = {};

export default SignIn;
