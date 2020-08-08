import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import routePages from "../../../../routes/pages";
import { ROLES } from "../../../../helpers/constantHelper";
export const pages = [
  {
    title: routePages.dashboard.name,
    href: routePages.dashboard.url,
    roles: routePages.dashboard.roles,
    icon: <DashboardIcon />,
  },
  {
    title: routePages.members.name,
    href: routePages.members.url,
    roles: routePages.members.roles,
    icon: <PeopleIcon />,
  },
  {
    title: "Services",
    href: "/services",
    roles: [ROLES.ADMIN],
    icon: <ShoppingBasketIcon />,
  },
  {
    title: "Admins",
    href: "/admins",
    roles: [ROLES.ADMIN],
    icon: <LockOpenIcon />,
  },
  {
    title: "Settings",
    href: "/settings",
    roles: [ROLES.ADMIN],
    icon: <SettingsIcon />,
  },
];
