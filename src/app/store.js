import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import usersReducer from "../redux/usersSlice"

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

  setupListeners(store.dispatch)