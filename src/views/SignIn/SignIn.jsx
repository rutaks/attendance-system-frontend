import React, { useState } from "react";
import { Grid, LinearProgress, Snackbar } from "@material-ui/core";
import { Minimal } from "../../layouts";
import { useStyles } from "./style";
import SignInForm from "./SignInForm";
import RightPaneView from "./RightPaneView";
import { Formik } from "formik";
import { validationSchema, initialValues } from "./validation";
import AuthService from "../../services/AuthService";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import pages from "../../routes/pages";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function SignIn() {
  const history = useHistory();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(values) {
    setError(null);
    setLoading(true);
    const { status, error } = await AuthService.login(values);
    if (!status) setError(error);
    else history.push(pages.dashboard.url);
    setLoading(false);
  }

  return (
    <Minimal>
      {loading && <LinearProgress />}
      <Snackbar
        open={error !== null}
        autoHideDuration={2000}
        onClose={() => setError(null)}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <RightPaneView />
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={async (values) => {
                    await handleSubmit(values);
                  }}
                >
                  {(props) => <SignInForm isDisabled={loading} {...props} />}
                </Formik>
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
