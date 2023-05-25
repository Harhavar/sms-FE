export const USER_PAGE_ENDPOINTS = {
  GET_ALL_USER_DATA: "",
  GET_ALL_PROJECTS_DATA: "/api/Projects/AllProjects",
  GET_ALL_USERS: "/api/User",
  ADD_USER: "/api/User/AddUser",
  EDIT_USER: "/api/User",
  GET_USER: "/api/User",
  DELETE_USER: "/api/User/Delete",
};

export const PROJECTS_ENDPOINTS = {
  GET_PROJECT_DETAILS_BY_ID: "/api/Projects/SingleProject",
  GET_SRE_ASSIGNMENT_BY_ID: "/api/Projects/SREAssignment",
  ADD_PROJECT: "/api/Projects/AddProject",
};

export const AUTHENTICATION_ENDPOINTS = {
  LOGIN: "/Auth/Login",
  FORGOT_PASSWORD: "/Auth/ForgetPassword",
  RESET_PASSWORD: "/Auth/ResetPassword",
};

export const SHIFTS_ENDPOINTS = {
  GET_ALL_SHIFTS: "/api/Shift/TenantShift",
};
