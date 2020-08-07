import React from "react";
import { Grid, Button, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./style";

function SignInForm({
  errors,
  touched,
  handleSubmit,
  setFieldTouched,
  handleChange,
  isDisabled,
}) {
  const classes = useStyles();
  const onChange = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
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
        onChange={onChange.bind(null, "username")}
        error={errors.username && touched.username}
        helperText={errors.username && errors.username}
      />
      <TextField
        className={classes.textField}
        fullWidth
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        onChange={onChange.bind(null, "password")}
        error={errors.password && touched.password}
        helperText={errors.password && errors.password}
      />
      <Button
        disabled={isDisabled}
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
