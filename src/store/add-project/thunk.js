import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { PROJECTS_ENDPOINTS } from "@/api/endpoints";

export const addProjectThunk = createAsyncThunk(
  "addProject/addProjectStatus",
  async ({ tenantId, payload }) => {
    try {
      const { data } = await axios.post(
        `${APP_BASE_URL}${PROJECTS_ENDPOINTS.ADD_PROJECT}/${tenantId}`,
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
