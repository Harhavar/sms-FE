import { FaEye } from "react-icons/fa";
import Icon from "@/atoms/icon";

import Chip from "@/atoms/chip";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    Header: "#",
    accessor: "serialNumber",
  },
  {
    Header: "Project Name",
    accessor: "name",
  },
  {
    Header: "Project Description",
    accessor: "description",
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }) => {
      return (
        <Chip
          content={value}
          color="text-white"
          backgroundColor="bg-green-600"
        />
      );
    },
  },
  {
    Header: "Created Date",
    accessor: "createdDate",
  },
  {
    Header: "Actions",
    accessor: "id",
    Cell: ({ value }) => {
      const navigate = useNavigate();
      const onClick = () => {
        navigate(`/user/projects/details/${value}`);
      };
      return (
        <>
          <Icon icon={FaEye} onClick={onClick} color="text-blue-500" />
        </>
      );
    },
  },
];
