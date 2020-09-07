import React, { useState } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TablePagination,
  LinearProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import MemberTableHead from "./components/MemberTableHead";
import MemberTableBody from "./components/MemberTableBody";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  actions: {
    justifyContent: "flex-end",
  },
  loader: {
    alignSelf: "center",
  },
}));

const MemberTable = (props) => {
  const {
    className,
    users,
    loading,
    error,
    totalCount,
    size,
    setSize,
    page,
    setPage,
    ...rest
  } = props;

  const classes = useStyles();

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = (event) => {
    const { users } = props;

    let selectedUsers;

    if (event.target.checked) {
      selectedUsers = users.map((user) => user.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedUsers.indexOf(id);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <div className={classes.inner}>
          {loading ? (
            <LinearProgress color="secondary" />
          ) : (
            <Table>
              <MemberTableHead
                items={users}
                selectedItems={selectedUsers}
                handleSelectAll={handleSelectAll}
              />

              <MemberTableBody
                items={users}
                selectedItems={selectedUsers}
                handleSelectOne={handleSelectOne}
              />
            </Table>
          )}
        </div>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={totalCount}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={size}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

MemberTable.propTypes = {
  className: PropTypes.string,
  users: PropTypes.array.isRequired,
};

export default MemberTable;
