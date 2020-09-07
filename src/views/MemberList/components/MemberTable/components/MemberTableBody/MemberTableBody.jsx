import { TableBody } from "@material-ui/core";
import React from "react";
import MemberTableRowItem from "../MemberTableRowItem";

export default function MemberTableBody({
  items = [],
  selectedItems = [],
  handleSelectOne = () => {},
}) {
  if (items.length < 1 || !Array.isArray(items)) {
    return null;
  }
  return (
    <TableBody>
      {items.map((item) => (
        <MemberTableRowItem
          key={item.id}
          item={item}
          selectedItems={selectedItems}
          handleSelectOne={handleSelectOne}
        />
      ))}
    </TableBody>
  );
}
