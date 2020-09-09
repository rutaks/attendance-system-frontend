import React, { Fragment } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import LoadingContainerBar from "../LoadingContainerBar";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(() => ({
  root: {},
}));

const MemberForm = ({
  className,
  errors,
  touched,
  initialValues = {},
  handleSubmit,
  setFieldTouched,
  handleChange,
  loadingFellowships = false,
  fellowships = [],
  loadingBranches = false,
  branches = [],
  apiError,
  submitError,
  isSubmitting,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const onChange = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <Fragment>
      <LoadingContainerBar loading={isSubmitting} />
      <Card className={clsx(classes.root, className)}>
        {(apiError !== null || submitError !== null) && (
          <div className={classes.error}>
            <Alert severity="error">{apiError || submitError}</Alert>
          </div>
        )}
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <CardHeader
            title={
              <Fragment>
                <IconButton onClick={goBack}>
                  <ArrowBackIcon />
                </IconButton>
                {"Member Form"}
              </Fragment>
            }
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="First name"
                  margin="dense"
                  name="firstName"
                  defaultValue={initialValues.firstName}
                  onChange={onChange.bind(null, "firstName")}
                  required
                  variant="outlined"
                  error={errors.firstName && touched.firstName}
                  helperText={errors.firstName && errors.firstName}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  margin="dense"
                  name="lastName"
                  defaultValue={initialValues.lastName}
                  onChange={onChange.bind(null, "lastName")}
                  required
                  variant="outlined"
                  error={errors.lastName && touched.lastName}
                  helperText={errors.lastName && errors.lastName}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="dense"
                  name="email"
                  defaultValue={initialValues.email}
                  onChange={onChange.bind(null, "email")}
                  required
                  variant="outlined"
                  error={errors.email && touched.email}
                  helperText={errors.email && errors.email}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  margin="dense"
                  name="phoneNumber"
                  defaultValue={initialValues.phoneNumber}
                  onChange={onChange.bind(null, "phoneNumber")}
                  type="number"
                  variant="outlined"
                  error={errors.phoneNumber && touched.phoneNumber}
                  helperText={errors.phoneNumber && errors.phoneNumber}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  disabled={loadingFellowships}
                  label="Select Fellowship"
                  margin="dense"
                  name="fellowshipId"
                  defaultValue={initialValues.fellowshipId}
                  onChange={onChange.bind(null, "fellowshipId")}
                  required
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  variant="outlined"
                  error={errors.fellowship && touched.fellowship}
                  helperText={errors.fellowship && errors.fellowship}
                >
                  {fellowships.map((option) => (
                    <option key={option.id || -1} value={option.id}>
                      {option.fellowshipName}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  disabled={loadingBranches}
                  label="Select Branch"
                  margin="dense"
                  name="branchId"
                  defaultValue={initialValues.branchId}
                  onChange={() => onChange.bind(null, "branchId")}
                  required
                  select
                  SelectProps={{ native: true }}
                  variant="outlined"
                  error={errors.branch && touched.branch}
                  helperText={errors.branch && errors.branch}
                >
                  {branches.map((option) => (
                    <option key={option.id || -1} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Location"
                  margin="dense"
                  name="location"
                  defaultValue={initialValues.location}
                  onChange={onChange.bind(null, "location")}
                  required
                  variant="outlined"
                  error={errors.location && touched.location}
                  helperText={errors.location && errors.location}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="National Id"
                  margin="dense"
                  name="nationalId"
                  defaultValue={initialValues.nationalId}
                  onChange={onChange.bind(null, "nationalId")}
                  required
                  variant="outlined"
                  error={errors.nationalId && touched.nationalId}
                  helperText={errors.nationalId && errors.nationalId}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Passport Id"
                  margin="dense"
                  name="passportId"
                  defaultValue={initialValues.passportId}
                  onChange={onChange.bind(null, "passportId")}
                  required
                  variant="outlined"
                  error={errors.passportId && touched.passportId}
                  helperText={errors.passportId && errors.passportId}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              fullWidth={true}
              disabled={isSubmitting}
              color="primary"
              variant="contained"
              type="submit"
            >
              Add member
            </Button>
          </CardActions>
        </form>
      </Card>
    </Fragment>
  );
};

MemberForm.propTypes = {
  className: PropTypes.string,
};

export default MemberForm;
