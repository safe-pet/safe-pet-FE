import { configureStore } from "@reduxjs/toolkit";

// extraReducer
import posts from "./modules/postSlice";

const store = configureStore({
  reducer: {
    posts,
  },
});
export default store;
