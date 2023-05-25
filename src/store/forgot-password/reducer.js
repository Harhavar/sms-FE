import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { forgotPasswordThunk } from "./thunk";

const forgotPassword = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(forgotPasswordThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = forgotPassword.actions;
export default forgotPassword;
