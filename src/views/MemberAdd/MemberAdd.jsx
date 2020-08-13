import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { MemberForm } from "./components";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./validation";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

function MemberAdd() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(props) => <MemberForm {...props} />}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
}

MemberAdd.propTypes = {};

export default MemberAdd;
