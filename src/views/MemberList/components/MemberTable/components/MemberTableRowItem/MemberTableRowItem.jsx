import React from "react";
import { Checkbox, makeStyles, TableCell, TableRow } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nameContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function MemberTableRowItem({
  item,
  selectedItems,
  handleSelectOne,
}) {
  const classes = useStyles();
  return (
    <TableRow
      hover
      key={item.id}
      selected={selectedItems.indexOf(item.id) !== -1}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={selectedItems.indexOf(item.id) !== -1}
          color="primary"
          onChange={(event) => handleSelectOne(event, item.id)}
          value="true"
        />
      </TableCell>
      <TableCell>
        <div className={classes.nameContainer}>
          {`${item.firstName} ${item.lastName}`}
        </div>
      </TableCell>
      <TableCell>{item.email}</TableCell>
      <TableCell>
        {item.fellowship ? item.fellowship.fellowshipName : "N/A"}
      </TableCell>
      <TableCell>{item.phoneNumber}</TableCell>
      <TableCell>{item.branch ? item.branch.name : "N/A"}</TableCell>
    </TableRow>
  );
}
