import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { APP_BASE_URL } from "@/config/env";
import { PROJECTS_ENDPOINTS } from "@/api/endpoints";

export const getProjectData = createAsyncThunk(
  "projects/getProjectDataStatus",
  async (userId) => {
    try {
      const responses = await Promise.all([
        axios.get(
          `${APP_BASE_URL}${PROJECTS_ENDPOINTS.GET_PROJECT_DETAILS_BY_ID}/${userId}`
        ),
        axios.get(
          `${APP_BASE_URL}${PROJECTS_ENDPOINTS.GET_SRE_ASSIGNMENT_BY_ID}/${userId}`
        ),
      ]);
      return { ...responses[0].data, ...responses[1].data };
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Done");
    }
  }
);
