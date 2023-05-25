import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { AUTHENTICATION_ENDPOINTS } from "@/api/endpoints";

export const resetUserPassword = createAsyncThunk(
  "resetUserPassword/resetUserPasswordStatus",
  async (payload) => {
    try {
      const { data } = await axios.post(
        `${APP_BASE_URL}${AUTHENTICATION_ENDPOINTS.RESET_PASSWORD}`,
        payload
      );
      console.log(data);
      return { ...data, ...payload };
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Done");
    }
  }
);
