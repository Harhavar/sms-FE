import { useAuthUser } from "react-auth-kit";

import Dashboard from "@/templates/dashboard";
import { header } from "./settings/data";

const Admin = () => {
  const auth = useAuthUser();
  return (
    <div>
      <Dashboard header={header} dropDownLabel={`Gagandeep (${auth().role})`} />
    </div>
  );
};

export default Admin;
