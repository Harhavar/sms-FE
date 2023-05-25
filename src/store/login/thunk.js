import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { AUTHENTICATION_ENDPOINTS } from "@/api/endpoints";

export const loginThunk = createAsyncThunk(
  "loginUser/loginUserStatus",
  async (credentials) => {
    try {
      const { data } = await axios.post(
        `${APP_BASE_URL}${AUTHENTICATION_ENDPOINTS.LOGIN}`,
        credentials
      );
      return { ...data, ...credentials };
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Done");
    }
  }
);
