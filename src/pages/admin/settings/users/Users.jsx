import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";

import { getAllUsersData } from "@/store/get-all-users/thunk";
import { FaPlus } from "react-icons/fa";

import { header, sideMenu } from "../data";
import TableDetails from "@/templates/table-details";
import { columns } from "./columns";
const Users = () => {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUserDetailsState = useSelector((state) => state.getAllUsers);

  useEffect(() => {
    dispatch(getAllUsersData());
  }, []);

  useEffect(() => {
    console.log(allUserDetailsState);
  }, [allUserDetailsState]);

  const handleHeadingButtonClick = () => {
    navigate("/admin/settings/users/add");
  };

  return (
    <div>
      {allUserDetailsState.isSuccess && (
        <TableDetails
          header={header}
          dropDownLabel={`Gagandeep (${auth().role})`}
          headingPath={"organizations /".toUpperCase()}
          title="Users"
          columns={columns}
          data={allUserDetailsState.data}
          subTitle="View list of users of the organization "
          sideMenu={sideMenu}
          buttonContent="Add New User"
          preFix={FaPlus}
          headingButtonClick={handleHeadingButtonClick}
        />
      )}
    </div>
  );
};

export default Users;
