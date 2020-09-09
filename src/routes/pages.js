import { ROLES } from "../helpers/constantHelper";

export default {
  login: { name: "Login", url: "/login" },
  dashboard: {
    name: "Dashboard",
    url: "/dashboard",
    roles: [ROLES.ADMIN, ROLES.CONSUMER],
  },
  members: {
    name: "Members",
    url: "/members",
    roles: [ROLES.ADMIN, ROLES.CONSUMER],
  },
  addMember: {
    name: "Add Members",
    url: "/members-add",
    roles: [ROLES.ADMIN],
  },
  editMember: {
    name: "Edit Members",
    url: `/members/:memberId/edit`,
    roles: [ROLES.ADMIN],
  },
  notFound: { name: "404", url: "/not-found" },
  logout: { name: "Logout", url: "/logout" },
};
