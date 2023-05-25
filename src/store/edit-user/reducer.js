import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { editUserThunk } from "./thunk";

const editUser = createSlice({
  name: "edit-user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(editUserThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = editUser.actions;
export default editUser;
