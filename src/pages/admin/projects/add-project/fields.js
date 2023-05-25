import * as Yup from "yup";

export const fields = [
  {
    key: 0,
    id: "name",
    label: "Project Name",
    name: "name",
    placeholder: "Enter project name here",
    inputType: "text",
  },
  {
    key: 1,
    id: "description",
    label: "Project Description",
    name: "description",
    placeholder: "Enter project description here",
    inputType: "text",
  },
];

export const fieldArray = [
  {
    key: 0,
    id: "userId",
    name: "userId",
    placeholder: "Select User",
    inputType: "select",
  },
  {
    key: 1,
    id: "shiftId",
    name: "shiftId",
    placeholder: "Select Shift",
    inputType: "select",
  },
];

export const validationSchema = Yup.object({
  name: Yup.string().required("Please enter a project name."),
  description: Yup.string().required("Please enter project description."),
});
