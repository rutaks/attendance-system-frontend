import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import routePages from "../../../../routes/pages";
export const pages = [
  {
    title: routePages.dashboard.name,
    href: routePages.dashboard.url,
    icon: <DashboardIcon />,
  },
  {
    title: routePages.members.name,
    href: routePages.members.url,
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
