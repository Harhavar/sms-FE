import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { getUserData } from "./thunk";

const user = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(getUserData.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = user.actions;
export default user;
