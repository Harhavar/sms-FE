import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";

import { getProjectData } from "@/store/project-details/thunk";
import { header, sideMenu } from "../../settings/data";
import ProjectDetailsTemplate from "@/templates/project-details";

import { projectData, sreData } from "./data";

const ProjectDetails = () => {
  const auth = useAuthUser();
  const { userId } = useParams();
  const dispatch = useDispatch();
  const projectDetailsState = useSelector((state) => state.projectDetails);

  useEffect(() => {
    dispatch(getProjectData(userId));
  }, []);

  useEffect(() => {
    mapProjectData();
    mapSREData();
  }, [projectDetailsState]);

  const mapProjectData = () => {
    projectData.rows.forEach((el) => {
      el.value = projectDetailsState.data[el.name];
    });
  };

  const mapSREData = () => {
    if (projectDetailsState?.data?.users && projectDetailsState?.data?.shifts) {
      sreData.rows.forEach((el, i) => {
        el["label"] = projectDetailsState.data["users"][i];
        el["value"] = projectDetailsState.data["shifts"][i];
      });
    }
  };

  const userDropdownClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <ProjectDetailsTemplate
        header={header}
        userDropdownClick={userDropdownClick}
        dropDownLabel={`Gagandeep (${auth().role})`}
        headingPath={"Project /".toUpperCase()}
        title="Synup"
        subTitle="View details of the project"
        cardData={[projectData, sreData]}
        sideMenu={sideMenu}
      />
    </div>
  );
};
export default ProjectDetails;
