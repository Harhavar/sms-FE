import { useEffect } from "react";

import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Authentication from "@/templates/authentication";
import { loginThunk } from "@/store/login/thunk";

import { fields, validationSchema } from "./fields";

const Login = () => {
  const authState = useSelector((state) => state.login);

  const signIn = useSignIn();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authState.isSuccess) {
      signIn({
        token: authState.data.token.result,
        expiresIn: 3600,
        tokenType: "string",
        authState: {
          id: authState.data.id,
          role: authState.data.role,
          tenantId: authState.data.tenentID,
          username: authState.data.username,
          email: "",
        },
      });
    }
  }, [authState]);

  const onSubmit = (credentials) => {
    dispatch(loginThunk(credentials));
  };

  const onForgotPasswordClick = () => {
    navigate("/forgot-password");
  };

  return (
    <>
      <Authentication
        title="Login"
        subTitle="Login to your account by using your existing credentials for this platform."
        fields={fields}
        onSubmit={onSubmit}
        buttonText={"Login"}
        isForgotPasswordEnabled={true}
        onForgotPasswordClick={onForgotPasswordClick}
        validationSchema={validationSchema}
        isSignUp={false}
      />
    </>
  );
};

export default Login;
