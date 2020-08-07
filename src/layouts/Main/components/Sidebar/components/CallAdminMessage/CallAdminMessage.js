import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Typography, colors } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: colors.grey[50],
  },
  content: {
    padding: theme.spacing(1, 2),
  },
}));

const CallAdminMessage = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.content}>
        <Typography align="center" gutterBottom variant="h6">
          For any issue call your admin
        </Typography>
        <Typography align="center" variant="body2">
          If you are not sure of which action to do, do not guess. Kindly call
          your admin on hesitation
        </Typography>
      </div>
    </div>
  );
};

CallAdminMessage.propTypes = {
  className: PropTypes.string,
};

export default CallAdminMessage;
