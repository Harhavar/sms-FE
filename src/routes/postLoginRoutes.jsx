import { useAuthUser } from "react-auth-kit";

import SuperAdminRoutes from "./superAdminRoutes";
import AdminRoutes from "./adminRoutes";
import UserRoutes from "./userRoutes";

const PostLoginRoutes = () => {
  const user = useAuthUser();
  return (
    <>
      {user().role === "SystemAdmin" && <SuperAdminRoutes />}
      {user().role === "Admin" && <AdminRoutes />}
      {user().role === "User" && <UserRoutes />}
    </>
  );
};

export default PostLoginRoutes;
