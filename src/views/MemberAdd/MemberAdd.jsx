import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./formik";
import MemberFormContainer from "../../components/MemberForm";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

function MemberAdd({ submit = () => {}, submitError, isSubmitting }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              submit(values);
            }}
          >
            {(props) => (
              <MemberFormContainer
                {...props}
                isSubmitting={isSubmitting}
                submitError={submitError}
              />
            )}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
}

MemberAdd.propTypes = {};

export default MemberAdd;
