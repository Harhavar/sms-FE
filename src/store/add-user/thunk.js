import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { USER_PAGE_ENDPOINTS } from "@/api/endpoints";

export const addUserThunk = createAsyncThunk(
  "addUser/addUserStatus",
  async ({ tenantId, payload }) => {
    console.log(payload);
    try {
      const { data } = await axios.post(
        `${APP_BASE_URL}${USER_PAGE_ENDPOINTS.ADD_USER}/${tenantId}`,
        payload
      );
      return data;
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Done");
    }
  }
);
