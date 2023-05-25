import { Routes, Route } from "react-router-dom";

import Admin, { Projects, Settings } from "@/pages/admin";
import { Users } from "@/pages/admin/settings";
import { ViewUser, AddUser, EditUser } from "@/pages/admin/settings/users";
import { AddProject, ProjectDetails } from "@/pages/admin/projects";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/admin/projects" element={<Projects />} />
      <Route
        path="/admin/projects/details/:userId"
        element={<ProjectDetails />}
      />
      <Route path="/admin/settings/users" element={<Users />} />
      <Route
        path="/admin/settings/users/details/:userId"
        element={<ViewUser />}
      />
      <Route path="/admin/settings/users/edit/:userId" element={<EditUser />} />
      <Route path="/admin/settings/users/add" element={<AddUser />} />
      <Route path="/admin/add-project" element={<AddProject />} />
    </Routes>
  );
};

export default AdminRoutes;
