import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { USER_PAGE_ENDPOINTS } from "@/api/endpoints";

export const deleteUserThunk = createAsyncThunk(
  "deleteUser/deleteUserStatus",
  async (userId) => {
    try {
      const { data } = await axios.delete(
        `${APP_BASE_URL}${USER_PAGE_ENDPOINTS.DELETE_USER}/${userId}`
      );
      return data;
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Done");
    }
  }
);
