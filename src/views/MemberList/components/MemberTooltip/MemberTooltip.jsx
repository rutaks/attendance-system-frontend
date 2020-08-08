import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import { SearchInput } from "../../../../components";
import { useHistory } from "react-router-dom";
import pages from "../../../../routes/pages";

const useStyles = makeStyles((theme) => ({
  root: {},
  row: {
    height: "42px",
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1,
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
  searchInput: {
    marginRight: theme.spacing(1),
  },
}));

const MemberTooltip = (props) => {
  const history = useHistory();
  const { className, ...rest } = props;

  const classes = useStyles();

  function goToAddMemberForm() {
    history.push(pages.addMember.url);
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.exportButton}>Export</Button>
        <Button color="primary" variant="contained" onClick={goToAddMemberForm}>
          Add Member
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user"
        />
      </div>
    </div>
  );
};

MemberTooltip.propTypes = {
  className: PropTypes.string,
};

export default MemberTooltip;
