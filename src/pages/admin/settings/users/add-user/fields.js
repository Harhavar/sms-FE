import * as Yup from "yup";

export const fields = [
  {
    key: 0,
    id: "firstName",
    label: "Full Name",
    name: "firstName",
    placeholder: "Enter full name",
    inputType: "text",
  },
  {
    key: 1,
    id: "email",
    label: "Email Address",
    name: "email",
    placeholder: "Enter email address",
    inputType: "email",
  },
  {
    key: 2,
    id: "contactNumber",
    label: "Phone Number",
    name: "contactNumber",
    placeholder: "Enter phone number",
    inputType: "tel",
  },
  {
    key: 3,
    id: "alternateContactNumber",
    label: "Alternate Number",
    name: "alternateContactNumber",
    placeholder: "Enter phone number",
    inputType: "tel",
  },
];

export const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter your name."),
  email: Yup.string().required("Please enter your email."),
  contactNumber: Yup.string().required("Please enter your contact number."),
});
