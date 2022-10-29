import { configureStore } from "@reduxjs/toolkit";

// extraReducer
import posts from "./modules/postSlice";
import community from "./modules/communitySlice";

const store = configureStore({
  reducer: {
    posts,
    community
  },
});
export default store;
