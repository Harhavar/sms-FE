import * as Yup from "yup";

export const fields = [
  {
    key: 0,
    id: "password",
    label: "New Password",
    name: "password",
    placeholder: "New Password",
    inputType: "password",
    isDetailedPasswordValidationEnabled: true,
  },
  {
    key: 1,
    id: "confirmPassword",
    label: "Confirm Password",
    name: "confirmPassword",
    placeholder: "Confirm Password",
    inputType: "password",
  },
];

export const validationSchema = Yup.object({
  password: Yup.string().required("Please enter a password."),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password doesn't match."),
});
