import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { USER_PAGE_ENDPOINTS } from "@/api/endpoints";

export const getUserData = createAsyncThunk(
  "user/getUserDataStatus",
  async () => {
    try {
      const { data } = await axios.get(USER_PAGE_ENDPOINTS);
      return data;
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Done");
    }
  }
);
