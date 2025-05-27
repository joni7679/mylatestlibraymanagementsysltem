import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// fetch users data
export const fetchUsers = createAsyncThunk("fetchusers/users", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:3000/users');
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error("Fetching problem, please try again later...", error);
        return rejectWithValue(error.message);
    }
})

// login user data match
export const loginFetchData = createAsyncThunk("auth/data", async (userData, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:3000/users');
        let users = response.data;
        console.log("your all user is", users);
        let matchedUser = users.find(user =>
            user.email === userData.email &&
            user.password === userData.password
        );

        if (!matchedUser) {
            return rejectWithValue("Invalid email, or password!");
        }
        console.log("User found:", matchedUser);
        console.log("your login data is", matchedUser);
        window.localStorage.setItem("loginuser", JSON.stringify(matchedUser));
        return matchedUser
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// edit user data
export const editUserData = createAsyncThunk("edit/user", async (userId, { rejectWithValue }) => {
    try {
        const response = await axios.put('http://localhost:3000/users', userId);
        console.log("your edit user data is", response.data);
        let user = response.data;
        return user
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

// delete user data
export const deleteUserData = createAsyncThunk("delete/user", async (userId, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`http://localhost:3000/users/${userId}`);
        console.log("your delete user data is", response.data);
        return userId
    } catch (error) {
        return rejectWithValue(error.message)
    }

})



let storeUser = JSON.parse(localStorage.getItem("loginuser"))

const initialState = {
    users: [],
    isLogined: storeUser ? true : false,
    isLoading: false,
    currentUser: storeUser || null,
    error: null,
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogined = true;
            state.currentUser = action.payload;
            state.isLoading = false;
        },
        logOut: (state) => {
            localStorage.removeItem("loginuser")
            state.isLogined = false;
            state.currentUser = null;
            state.error = null;

        },
        addusers: (state, action) => {
            state.users.push(action.payload);
        },
        editUser: (state, action) => {
            state.users = state.users.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                return user;
            })
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
        fetchUserData: (state, action) => {
            state.users = action.payload
        },

    },
    extraReducers: (bulider) => {
        // fetch users......
        bulider.addCase(fetchUsers.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload
                state.isLoading = false;

            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(loginFetchData.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginFetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
                state.isLogined = true;
                localStorage.setItem("loginuser", JSON.stringify(action.payload));

            })
            .addCase(loginFetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
            .addCase(editUserData.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(editUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = state.users.map((user, id) => {
                    if (user.id === action.payload.id) {
                        return action.payload
                    }
                    return user
                })
            })
            .addCase(editUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(deleteUserData.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteUserData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = state.users.filter((user) => user.id !== action.payload);
            })
            .addCase(deleteUserData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || action.error.message;
            });
    }
});

export const { addusers, editUser, removeUser, logOut, fetchUserData } = userSlice.actions;

export default userSlice.reducer;
