import { useDispatch, useSelector } from "react-redux";

import { getAllUsersData } from "@/store/get-all-users/thunk";
import { addProjectThunk } from "@/store/add-project/thunk";

import { useAuthUser } from "react-auth-kit";

import { useEffect } from "react";
import AddItem from "@/templates/add-item";
import { fields, fieldArray } from "./fields";

const AddProject = () => {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const allUsersState = useSelector((state) => state.getAllUsers);
  const tenantId = auth().tenantId;

  useEffect(() => {
    dispatch(getAllUsersData());
  }, []);

  useEffect(() => {
    console.log(allUsersState);
  }, [allUsersState]);

  // const payload = {
  //   name: "Something",
  //   description: "Something",
  //   userShift: [
  //     {
  //       shiftId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //       userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     },
  //   ],
  // };
  const onSubmit = (payload) => {
    console.log(payload);
    // dispatch(addProjectThunk({ tenantId, payload }));
  };
  return (
    <div>
      <AddItem
        title="Add Project"
        subTitle="Add project details"
        formHeading="Project Details"
        fields={fields}
        onSubmit={onSubmit}
        buttonText="Save"
        fieldArray={fieldArray}
      />
    </div>
  );
};

export default AddProject;
