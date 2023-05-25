import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";

import { getUserProjectsData } from "@/store/user-projects/thunk";

import { FaPlus } from "react-icons/fa";

import Table from "@/templates/table";
import { columns } from "./columns";
import { header } from "../settings/data";
import Footer from "@/organisms/footer";

const Projects = () => {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userProjectsState = useSelector((state) => state.userProjects);

  useEffect(() => {
    dispatch(getUserProjectsData());
  }, []);

  const handleHeadingButtonClick = () => {
    navigate("/admin/add-project");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="grow">
          {userProjectsState.isSuccess && (
            <Table
              title="Projects"
              subTitle="View assigned projects"
              buttonContent="Add New Project"
              preFix={FaPlus}
              headingButtonClick={handleHeadingButtonClick}
              columns={columns}
              data={userProjectsState.data}
              header={header}
              dropDownLabel={`Gagandeep (${auth().role})`}
            />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Projects;
