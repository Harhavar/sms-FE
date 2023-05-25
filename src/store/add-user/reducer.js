import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { addUserThunk } from "./thunk";

const addUser = createSlice({
  name: "add-user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(addUserThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = addUser.actions;
export default addUser;
