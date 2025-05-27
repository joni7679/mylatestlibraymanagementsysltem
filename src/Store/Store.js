
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../Reducx/BooksSlice";
import userReducer from "../Reducx/UserSlice";
import { adminlice } from "../Reducx/AdminSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        books: booksReducer,
        admin:adminlice.reducer
    },
});
