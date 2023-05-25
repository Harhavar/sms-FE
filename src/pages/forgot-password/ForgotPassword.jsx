import { useDispatch, useSelector } from "react-redux";

import Authentication from "@/templates/authentication";
import { forgotPasswordThunk } from "@/store/forgot-password/thunk";

import { fields, validationSchema } from "./fields";

const ForgotPassword = () => {
  const forgotPasswordState = useSelector((state) => state.forgotPassword);
  const dispatch = useDispatch();

  const onSubmit = (credentials) => {
    dispatch(forgotPasswordThunk(credentials));
  };

  return (
    <>
      <Authentication
        title="Forgot Password?"
        subTitle="Enter your registered email address below to receive a link to reset your password"
        fields={fields}
        onSubmit={onSubmit}
        buttonText={"Reset Password"}
        isForgotPasswordEnabled={false}
        validationSchema={validationSchema}
        successMessage={
          forgotPasswordState.isSuccess
            ? forgotPasswordState.data?.message
            : null
        }
        isSignUp={false}
      />
    </>
  );
};

export default ForgotPassword;
