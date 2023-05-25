import { configureStore } from "@reduxjs/toolkit";
import user from "./user/reducer";
import login from "./login/reducer";
import forgotPassword from "./forgot-password/reducer";
import resetPassword from "./reset-password/reducer";
import userProjects from "./user-projects/reducer";
import projectDetails from "./project-details/reducer";
import addProject from "./add-project/reducer";
import getAllUsers from "./get-all-users/reducer";
import addUser from "./add-user/reducer";
import getUser from "./get-user/reducer";
import deleteUser from "./delete-user/reducer";

const store = configureStore({
  reducer: {
    login: login.reducer,
    forgotPassword: forgotPassword.reducer,
    resetPassword: resetPassword.reducer,
    user: user.reducer,
    userProjects: userProjects.reducer,
    projectDetails: projectDetails.reducer,
    addProject: addProject.reducer,
    getAllUsers: getAllUsers.reducer,
    addUser: addUser.reducer,
    getUser: getUser.reducer,
    deleteUser: deleteUser.reducer,
  },
});

export default store;
