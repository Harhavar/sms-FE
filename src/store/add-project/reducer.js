import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { addProjectThunk } from "./thunk";

const addProject = createSlice({
  name: "add-project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProjectThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProjectThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(addProjectThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = addProject.actions;
export default addProject;
