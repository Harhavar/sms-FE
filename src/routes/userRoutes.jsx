import { Routes, Route } from "react-router-dom";

import User, { Projects, MyTasks } from "@/pages/user";
import { ProjectDetails } from "@/pages/user/projects";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/user/projects" element={<Projects />} />
      <Route
        path="/user/projects/details/:userId"
        element={<ProjectDetails />}
      />
      <Route path="/user/my-tasks" element={<MyTasks />} />
    </Routes>
  );
};

export default UserRoutes;
