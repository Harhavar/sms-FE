import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { getAllUsersData } from "./thunk";

const getAllUsers = createSlice({
  name: "get-all-users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsersData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload;
        state.isSuccess = true;
      })
      .addCase(getAllUsersData.rejected, (state, { payload }) => {
        state.loading = false;
        state.isSuccess = false;
        state.error = payload;
      });
  },
});

export const {} = getAllUsers.actions;
export default getAllUsers;
