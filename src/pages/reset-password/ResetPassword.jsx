import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Authentication from "@/templates/authentication";
import {} from "@/store/login/thunk";

import { fields, validationSchema } from "./fields";

const ResetPassword = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onSubmit = (credentials) => {};

  return (
    <>
      <Authentication
        title="Reset Password"
        subTitle="Set new password for your account."
        fields={fields}
        onSubmit={onSubmit}
        buttonText={"Set New Password"}
        isForgotPasswordEnabled={false}
        validationSchema={validationSchema}
        isSignUp={false}
      />
    </>
  );
};

export default ResetPassword;
