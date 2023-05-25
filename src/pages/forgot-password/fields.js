import * as Yup from "yup";

export const fields = [
  {
    key: 0,
    id: "email",
    label: "Email Address",
    name: "email",
    placeholder: "Registered mail address",
    inputType: "text",
  },
];

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address."),
});
