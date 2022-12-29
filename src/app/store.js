import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "../feature/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: BookSlice,
  },
});

export default store;
