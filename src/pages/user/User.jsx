import { useAuthUser } from "react-auth-kit";

import Dashboard from "@/templates/dashboard";
import { header } from "./data";

const User = () => {
  const auth = useAuthUser();
  const userDropdownClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Dashboard
        header={header}
        userDropdownClick={userDropdownClick}
        dropDownLabel={`Gagandeep (${auth().role})`}
      />
    </div>
  );
};

export default User;
