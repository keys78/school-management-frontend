import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (dispatch, getState) => {
    return await fetch("https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates").then(
      (res) => res.json()
    );
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usersSlice.reducer;