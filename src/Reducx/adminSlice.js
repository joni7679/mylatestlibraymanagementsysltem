import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// featch admin data
export const fetchAdminData = createAsyncThunk("fetchadmin/admin", async () => {
    try {
        let response = await axios.get(`http://localhost:3000/admin`);
        let finalres = response.data;
        console.log("finalres", finalres);
        return finalres
    } catch (error) {
        console.log("error feching peroblem plz try agin leter....", error);
    }

})

// login data match admin function
export const featchAdminLoginData = createAsyncThunk("admin/auth", async (AdminData, { rejectWithValue }) => {
    try {
        let response = await axios.get(`http://localhost:3000/admin`);
        let admin = response.data;
        console.log("admin", admin);

        let matchAdminData = admin.find((val) =>
            val.email === AdminData.email && val.password === AdminData.password
        );

        if (!matchAdminData) {
            return rejectWithValue("Invalid email, or password!");
        }
        console.log("admin found:", matchAdminData);
        console.log("your login data is", matchAdminData);
        window.localStorage.setItem("adminlogin", JSON.stringify(matchAdminData));
        return matchAdminData
    } catch (error) {
        return rejectWithValue("error feching peroblem plz try agin leter....");
    }
})

// get in localstorage data
let parseAdminData = JSON.parse(localStorage.getItem("adminlogin"));
console.log("parseAdminData", parseAdminData);


const initialState = {
    admin: [],
    isLogined: parseAdminData ? true : false,
    isLoading: false,
    currentAdmin: parseAdminData || null,
    error: null,
};


export const adminlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogined = true;
            state.currentAdmin = action.payload;
            state.isLoading = false;
        },
        logOutAdmin: (state) => {
            localStorage.removeItem("adminlogin")
            state.isLogined = false;
            state.currentAdmin = null;
            state.error = null;
        },

        addAdmin: (state, action) => {
            state.admin.push(action.payload);
        },
        editAdmin: (state, action) => {
            state.admin = state.admin.map((val) => {
                if (val.id === action.payload.id) {
                    return action.payload;
                }
                return val;
            })
        },
        removeadmin: (state, action) => {
            state.admin = state.admin.filter((val) => val.id !== action.payload)
        },
        adminData: (state, action) => {
            state.admin = action.payload
        },



    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdminData.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(fetchAdminData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.admin = action.payload;
                state.error = null;
            })
            .addCase(fetchAdminData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(featchAdminLoginData.pending, (state) => {
                state.isLoading = true;
                state.error = null;

            })
            .addCase(featchAdminLoginData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isLogined = true;
                state.currentAdmin = action.payload;
                state.error = null;
                localStorage.setItem("adminlogin", JSON.stringify(action.payload));
            })
            .addCase(featchAdminLoginData.rejected, (state, action) => {
                state.isLoading = false;
                state.isLogined = false;
                state.error = action.payload || action.error.message;
            })

    }

});

export const { addAdmin, editAdmin, removeadmin, logOutAdmin, adminData } = adminlice.actions;

export default adminlice.reducer;
