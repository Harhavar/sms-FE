import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { deleteUserThunk } from "./thunk";

const deleteUser = createSlice({
  name: "add-user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(deleteUserThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = deleteUser.actions;
export default deleteUser;
