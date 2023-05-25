import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { getProjectData } from "./thunk";

const projectDetails = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProjectData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(getProjectData.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = projectDetails.actions;
export default projectDetails;
