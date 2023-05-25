import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { USER_PAGE_ENDPOINTS } from "@/api/endpoints";

export const editUserThunk = createAsyncThunk(
  "editUser/editUserStatus",
  async ({ userId, payload }) => {
    try {
      const { data } = await axios.put(
        `${APP_BASE_URL}${USER_PAGE_ENDPOINTS.EDIT_USER}/${userId}`,
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
