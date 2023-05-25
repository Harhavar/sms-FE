import { useDispatch, useSelector } from "react-redux";
import { addUserThunk } from "@/store/add-user/thunk";

import { useAuthUser } from "react-auth-kit";

import AddItem from "@/templates/add-item";
import { fields, validationSchema } from "./fields";

const AddUser = () => {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const tenantId = auth().tenantId;
  const onSubmit = (payload) => {
    dispatch(addUserThunk({ tenantId, payload }));
  };
  return (
    <div>
      <AddItem
        title="Add New User"
        subTitle="Add user details below"
        formHeading="User Details"
        fields={fields}
        onSubmit={onSubmit}
        buttonText="Save"
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default AddUser;
