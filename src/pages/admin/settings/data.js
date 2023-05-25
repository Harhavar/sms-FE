export const header = {
  navLinks: [
    {
      id: 0,
      label: "Dashboard",
      route: "/",
    },
    {
      id: 1,
      label: "Projects",
      route: "/admin/projects",
    },
    {
      id: 2,
      label: "My Tasks",
      route: "/admin/my-tasks",
    },
    {
      id: 3,
      label: "Settings",
      route: "/admin/settings/users",
    },
  ],
  userDropdown: [
    {
      id: 0,
      label: "Profile",
      value: "profile",
    },
    {
      id: 1,
      label: "Logout",
      value: "logout",
    },
  ],
};

export const sideMenu = [
  {
    id: 0,
    label: "Organization Details",
    route: "/admin/settings/org-details",
  },
  {
    id: 1,
    label: "Users",
    route: "/admin/settings/users",
  },
  {
    id: 2,
    label: "Permissions",
    route: "/admin/settings/permissions",
  },
  {
    id: 3,
    label: "Roles",
    route: "admin/settings/roles",
  },
];
