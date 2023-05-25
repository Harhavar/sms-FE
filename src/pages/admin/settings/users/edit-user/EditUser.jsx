import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserThunk } from "@/store/get-user/thunk";
import { editUserThunk } from "@/store/edit-user/thunk";

import EditItem from "@/templates/edit-item";
import { fields } from "./fields";

const EditUser = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const currentUserState = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUserThunk(userId));
  }, []);

  const onSubmit = (payload) => {
    dispatch(editUserThunk({ userId, payload }));
  };
  return (
    <div>
      <EditItem
        title="Edit User"
        subTitle="Edit user details"
        formHeading="User Details"
        fields={fields}
        onSubmit={onSubmit}
        buttonText="Save"
        initialValues={currentUserState.data}
      />
    </div>
  );
};

export default EditUser;
