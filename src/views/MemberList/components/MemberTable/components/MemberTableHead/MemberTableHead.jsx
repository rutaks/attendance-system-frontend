import React from "react";
import { Checkbox, TableCell, TableHead, TableRow } from "@material-ui/core";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

export default function MemberTableHead({
  selectedItems,
  items,
  handleSelectAll,
}) {
  return (
    <MuiThemeProvider>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              checked={selectedItems.length === items.length}
              color="primary"
              indeterminate={
                selectedItems.length > 0 && selectedItems.length < items.length
              }
              onChange={handleSelectAll}
            />
          </TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Fellowship</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Branch</TableCell>
        </TableRow>
      </TableHead>
    </MuiThemeProvider>
  );
}
