import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import { Formik } from "formik";
import { initialValues, validationSchema } from "./formik";
import MemberFormContainer from "../../components/MemberForm";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

function MemberEdit({
  submit = () => {},
  submitError,
  isSubmitting,
  isGettingItem,
  itemError,
  editItem,
}) {
  const classes = useStyles();

  if (isGettingItem) {
    return null;
  }

  if (!editItem) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          {itemError !== null && (
            <Typography variant="h1" component="h2">
              Can not find member
            </Typography>
          )}
          {itemError == null && (
            <Formik
              initialValues={initialValues(editItem)}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                submit(values);
              }}
            >
              {(props) =>
                itemError === null && (
                  <MemberFormContainer
                    {...props}
                    isSubmitting={isSubmitting}
                    submitError={submitError}
                  />
                )
              }
            </Formik>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

MemberEdit.propTypes = {};

export default MemberEdit;
