import React from "react";
import { makeStyles } from "@material-ui/styles";

import { MemberTooltip, MemberTable } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
  },
}));

const MemberList = ({
  error,
  loading = true,
  members = [],
  totalCount,
  size,
  setSize,
  page,
  setPage,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MemberTooltip />
      <div className={classes.content}>
        <MemberTable
          error={error}
          loading={loading}
          users={members}
          totalCount={totalCount}
          size={size}
          setSize={setSize}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default MemberList;
