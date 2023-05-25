import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { USER_PAGE_ENDPOINTS } from "@/api/endpoints";

export const getUserThunk = createAsyncThunk(
  "getUser/getUserStatus",
  async (userId) => {
    try {
      const { data } = await axios.get(
        `${APP_BASE_URL}${USER_PAGE_ENDPOINTS.GET_USER}/${userId}`
      );
      return data;
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Done");
    }
  }
);
