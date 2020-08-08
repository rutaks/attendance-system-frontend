import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";

import { MemberTooltip, MemberTable } from "./components";
import mockData from "./data";
import MemberService from "../../services/MemberService";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [members, setMembers] = useState([
    {
      id: null,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      fellowship: { fellowshipName: "" },
      branch: { name: "" },
    },
  ]);

  useEffect(() => {
    getMembers();
  }, []);

  async function getMembers() {
    setError(null);
    setLoading(true);
    const { status, error, response } = await MemberService.getMembers();
    if (!status) setError(error);
    else setMembers(response.body.members);
    setLoading(false);
  }

  return (
    <div className={classes.root}>
      <MemberTooltip />
      <div className={classes.content}>
        <MemberTable loading={loading} users={members} />
      </div>
    </div>
  );
};

export default MemberList;
