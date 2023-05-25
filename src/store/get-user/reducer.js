import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { getUserThunk } from "./thunk";

const getUser = createSlice({
  name: "get-user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = getUser.actions;
export default getUser;
