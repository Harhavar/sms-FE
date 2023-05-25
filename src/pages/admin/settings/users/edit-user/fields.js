import * as Yup from "yup";

const statusOptions = [
  { id: 0, label: "Active", value: true },
  { id: 1, label: "Inactive", value: false },
];
const roleOptions = [
  { id: 0, label: "Super Admin", value: "SystemAdmin" },
  { id: 1, label: "Admin", value: "Admin" },
  { id: 2, label: "User", value: "User" },
];

export const fields = [
  {
    key: 0,
    id: "username",
    label: "Full Name",
    name: "username",
    inputType: "text",
  },
  {
    key: 1,
    id: "role",
    label: "Role",
    name: "role",
    inputType: "select",
    options: roleOptions,
  },
  {
    key: 2,
    id: "isActive",
    label: "Status",
    name: "isActive",
    inputType: "select",
    options: statusOptions,
  },
  {
    key: 3,
    id: "email",
    label: "Email Address",
    name: "email",
    inputType: "email",
  },
  {
    key: 4,
    id: "contactNumber",
    label: "Phone Number",
    name: "contactNumber",
    inputType: "tel",
  },
  {
    key: 5,
    id: "alternateContactNumber",
    label: "Alternate Number",
    name: "alternateContactNumber",
    inputType: "tel",
  },
];

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter your name."),
  email: Yup.string().required("Please enter your email."),
  contactNumber: Yup.string().required("Please enter your contact number."),
});
