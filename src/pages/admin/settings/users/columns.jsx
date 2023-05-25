import { useSelector, useDispatch } from "react-redux";

import { deleteUserThunk } from "@/store/delete-user/thunk";
import { FaEye, FaPen, FaTrashAlt } from "react-icons/fa";
import Icon from "@/atoms/icon";

import Chip from "@/atoms/chip";
import { useNavigate } from "react-router-dom";

export const columns = [
  {
    Header: "#",
    accessor: "serialNumber",
  },
  {
    Header: "Full Name",
    accessor: "username",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Status",
    accessor: "isActive",
    Cell: ({ value }) => {
      return (
        <Chip
          content={value ? "Active" : "Inactive"}
          color="text-white"
          backgroundColor={value ? "bg-green-600" : "bg-slate-600"}
        />
      );
    },
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone Number",
    accessor: "contactNumber",
  },
  {
    Header: "Alternate Number",
    accessor: "alternateContactNumber",
  },
  {
    Header: "Actions",
    accessor: "userId",
    Cell: ({ value, row }) => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleView = () => {
        navigate(`/admin/settings/users/details/${value}`);
      };
      const handleEdit = () => {
        navigate(`/admin/settings/users/edit/${value}`);
      };
      const handleDelete = () => {
        dispatch(deleteUserThunk(value));
      };
      return (
        <div className="flex gap-4">
          <Icon icon={FaEye} onClick={handleView} color="text-blue-500" />
          <Icon icon={FaPen} onClick={handleEdit} color="text-blue-500" />
          <Icon
            icon={FaTrashAlt}
            onClick={handleDelete}
            color="text-blue-500"
          />
        </div>
      );
    },
  },
];
