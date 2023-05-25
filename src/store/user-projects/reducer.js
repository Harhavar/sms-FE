import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { getUserProjectsData } from "./thunk";

const userProjects = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProjectsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserProjectsData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(getUserProjectsData.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = userProjects.actions;
export default userProjects;
