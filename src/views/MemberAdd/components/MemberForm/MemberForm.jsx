import React, { useEffect, useState } from "react";
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
import FellowshipService from "../../../../services/FellowshipService";
import BranchService from "../../../../services/BranchService";

const useStyles = makeStyles(() => ({
  root: {},
}));

const MemberForm = ({
  className,
  errors,
  touched,
  handleSubmit,
  setFieldTouched,
  handleChange,
}) => {
  const classes = useStyles();
  const [isGettingBranches, setIsGettingBranches] = useState(true);
  const [branches, setBranches] = useState([]);
  const [isGettingFellowships, setIsGettingFellowships] = useState(true);
  const [fellowships, setFellowships] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function getFellowships() {
      const { body, status, error } = await FellowshipService.getFellowships();
      if (status) {
        setFellowships(body.fellowships);
      } else {
        setError(error);
      }
      setIsGettingFellowships(false);
    }
    getFellowships();
  }, []);

  useEffect(() => {
    async function getBranches() {
      const { body, status, error } = await BranchService.getBranches();
      if (status) {
        setBranches(body.branches);
      } else {
        setError(error);
      }
      setIsGettingBranches(false);
    }
    getBranches();
  }, []);

  const onChange = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const [values, setValues] = useState({
    firstName: "Admin",
    lastName: "One",
    email: "admin_one@admin.com",
    phone: "",
    state: "Kigali",
  });

  const fellowship = [{ label: "Singles", values: "singles" }];

  return (
    <Card className={clsx(classes.root, className)}>
      <form onSubmit={handleSubmit} autoComplete="off" noValidate>
        <CardHeader subheader="Add member" title="Member" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                margin="dense"
                name="firstName"
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
                disabled={isGettingFellowships}
                label="Select Fellowship"
                margin="dense"
                name="fellowship"
                onChange={onChange.bind(null, "fellowship")}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                variant="outlined"
                error={errors.fellowship && touched.fellowship}
                helperText={errors.fellowship && errors.fellowship}
              >
                {fellowships.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.fellowshipName}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                disabled={isGettingBranches}
                label="Select Branch"
                margin="dense"
                name="branch"
                onChange={onChange.bind(null, "branch")}
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
                error={errors.branch && touched.branch}
                helperText={errors.branch && errors.branch}
              >
                {branches.map((option) => (
                  <option key={option.id} value={option.id}>
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
          <Button color="primary" variant="contained" type="submit">
            Add member
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

MemberForm.propTypes = {
  className: PropTypes.string,
};

export default MemberForm;
