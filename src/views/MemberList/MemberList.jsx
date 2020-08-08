import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { MemberTooltip, MemberTable } from "./components";
import mockData from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const MemberList = () => {
  const classes = useStyles();

  const [users] = useState(mockData);

  return (
    <div className={classes.root}>
      <MemberTooltip />
      <div className={classes.content}>
        <MemberTable users={users} />
      </div>
    </div>
  );
};

export default MemberList;
