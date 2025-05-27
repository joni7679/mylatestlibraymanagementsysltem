import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchIngBooks = createAsyncThunk("books/fetchIngBooks", async () => {
    try {
        const res = await axios.get("http://localhost:3000/books");
        console.log(res.data);
        return res.data;
    } catch (error) {

        return console.log("Fetching problem, please try again...");
    }
});



const initialState = {
    books: [],
    isLoading: false,
    error: null,
};


export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBooks: (state, action) => {
            state.books.push(action.payload);
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload);
        },
        addReview: (state, action) => {
          
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngBooks.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchIngBooks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.books = action.payload;
                state.error = null;
            })
            .addCase(fetchIngBooks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});


export const { addBooks, removeBook, addReview } = booksSlice.actions;
export default booksSlice.reducer;
