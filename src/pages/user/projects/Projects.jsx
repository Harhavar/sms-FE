import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";

import { getUserProjectsData } from "@/store/user-projects/thunk";

import Table from "@/templates/table";
import { columns } from "./columns";
import { header } from "../data";
import Footer from "@/organisms/footer";

const Projects = () => {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const userProjectsState = useSelector((state) => state.userProjects);

  useEffect(() => {
    dispatch(getUserProjectsData());
  }, []);

  const userDropdownClick = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="grow">
          {userProjectsState.isSuccess && (
            <Table
              title="Projects"
              subTitle="View assigned projects"
              columns={columns}
              data={userProjectsState.data}
              header={header}
              userDropdownClick={userDropdownClick}
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
