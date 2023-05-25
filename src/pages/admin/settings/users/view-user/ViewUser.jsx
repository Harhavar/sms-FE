import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

import { getUserThunk } from "@/store/get-user/thunk";
import { userData } from "./data";
import ProjectDetailsTemplate from "@/templates/project-details";
import { header } from "../../data";

const ViewUser = () => {
  const auth = useAuthUser();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(getUserThunk(userId));
  }, []);

  useEffect(() => {
    mapUserData();
  }, [userState]);

  const mapUserData = () => {
    userData.rows.forEach((el) => {
      el.value = userState.data[el.name];
    });
  };

  return (
    <div>
      <ProjectDetailsTemplate
        header={header}
        dropDownLabel={`Gagandeep (${auth().role})`}
        headingPath={""}
        title="View User"
        subTitle="View user details"
        cardData={[userData]}
      />
    </div>
  );
};

export default ViewUser;
