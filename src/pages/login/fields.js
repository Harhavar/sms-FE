import * as Yup from "yup";

export const fields = [
  {
    key: 0,
    id: "username",
    label: "Username",
    name: "username",
    placeholder: "Username",
    inputType: "text",
  },
  {
    key: 1,
    id: "password",
    label: "Password",
    name: "password",
    placeholder: "Password",
    inputType: "password",
  },
];

export const validationSchema = Yup.object({
  username: Yup.string().required("Please enter a username."),
  password: Yup.string().required("Please enter your password."),
});
