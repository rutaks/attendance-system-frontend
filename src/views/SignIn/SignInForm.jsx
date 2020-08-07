import React from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./style";

function SignInForm() {
  const classes = useStyles();
  return (
    <form className={classes.form}>
      <Typography variant="h1">Attendance System</Typography>
      <Typography className={classes.title} variant="h2">
        Sign in
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Sign in with your given username or password
      </Typography>
      <Grid className={classes.socialButtons} container spacing={2}></Grid>
      <TextField
        className={classes.textField}
        fullWidth
        label="Username"
        name="username"
        type="text"
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        fullWidth
        label="Password"
        name="password"
        type="password"
        variant="outlined"
      />
      <Button
        className={classes.signInButton}
        color="primary"
        fullWidth
        size="large"
        type="submit"
        variant="contained"
      >
        Sign in now
      </Button>
      <Typography color="textSecondary" variant="body1">
        Don't have an account? Contact your admin
      </Typography>
    </form>
  );
}

SignInForm.propTypes = {};

export default SignInForm;
