import { Routes, Route } from "react-router-dom";

import SuperAdmin from "@/pages/super-admin";

const SuperAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SuperAdmin />} />
    </Routes>
  );
};

export default SuperAdminRoutes;
