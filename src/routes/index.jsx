import React from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

import useAuthToken from "@/hooks/useAuthToken";

import PreLoginRoutes from "./preLoginRoutes";
import PostLoginRoutes from "./postLoginRoutes";
import { useIsAuthenticated } from "react-auth-kit";

const Routes = () => {
  const isAuthenticated = useIsAuthenticated();
  const authToken = useAuthToken();
  axios.interceptors.request.use((config) => {
    if (authToken) {
      config.headers["Authorization"] = `Bearer ${authToken}`;
    }
    return config;
  });
  return (
    <BrowserRouter>
      {isAuthenticated() ? <PostLoginRoutes /> : <PreLoginRoutes />}
    </BrowserRouter>
  );
};

export default Routes;
