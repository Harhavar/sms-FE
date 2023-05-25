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
      route: "/user/projects",
    },
    {
      id: 2,
      label: "My Tasks",
      route: "/user/my-tasks",
    },
  ],
  userDropdown: [
    {
      id: 0,
      label: "Profile",
      route: "/profile",
    },
    {
      id: 1,
      label: "Logout",
      value: "/",
    },
  ],
};

export const sideMenu = [
  {
    id: 0,
    label: "Project Details",
    route: "/user/projects/details/:userId",
  },
  {
    id: 0,
    label: "Tasks",
    route: "/user/projects/tasks/:userId",
  },
  {
    id: 0,
    label: "Documents",
    route: "/user/projects/documents/:userId",
  },
  {
    id: 0,
    label: "Notes",
    route: "/user/projects/notes/:userId",
  },
  {
    id: 0,
    label: "Shiftss",
    route: "/user/projects/shifts/:userId",
  },
  {
    id: 0,
    label: "Alert Manager",
    route: "/user/projects/alert-manager/:userId",
  },
];
