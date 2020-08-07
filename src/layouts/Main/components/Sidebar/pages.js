import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";

export const pages = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Members",
    href: "/members",
    icon: <PeopleIcon />,
  },
  {
    title: "Services",
    href: "/services",
    icon: <ShoppingBasketIcon />,
  },
  {
    title: "Admins",
    href: "/admins",
    icon: <LockOpenIcon />,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
];
