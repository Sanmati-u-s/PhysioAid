import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: true, // start in loading state until checkAuth resolves
    user: null,
}

export const registerUser = createAsyncThunk('/auth/register',
    async(formData, {rejectWithValue}) => {
        try{
            const response = await axios.post(
            'http://localhost:5000/api/auth/register',
            formData,
            { withCredentials: true }
            );
            return response.data
        }catch(error){
            return rejectWithValue({message:'Registration failed.'})
        }
    }
)

export const loginUser = createAsyncThunk('/auth/login',
    async(formData, {rejectWithValue}) => {
        try{
            const response = await axios.post(
            'http://localhost:5000/api/auth/login',
            formData,
            { withCredentials: true }
            );
            return response.data
        }catch(error){
            return rejectWithValue({message:'Login failed.'})
        }
    }
)

export const checkAuth = createAsyncThunk(
    '/auth/checkauth',
    async(_, {rejectWithValue}) => {
        try{
            const response = await axios.get(
            'http://localhost:5000/api/auth/check-auth',
            {
            withCredentials: true,
            headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            }
        });
            return response.data
        }catch(error){
            return rejectWithValue({message:'Authentication check failed.'})
        }
    }
)

export const logoutUser = createAsyncThunk(
    '/auth/logout',
    async(_, {rejectWithValue}) => {
        try{
            const response = await axios.post(
            'http://localhost:5000/api/auth/logout',
            {},
            { withCredentials: true }
        );
            return response.data
        }catch(error){
            return rejectWithValue({message:'Logout failed.'})
        }
    }
)


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUser: (state,action) => {
            // Implementation
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending,(state) =>{
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled,(state,action) =>{
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null
            })
            .addCase(registerUser.rejected,(state,action) =>{
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null
            }).addCase(loginUser.pending,(state) =>{
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled,(state,action) =>{
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user
            })
            .addCase(loginUser.rejected,(state,action) =>{
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null
            })
            .addCase(checkAuth.pending,(state) =>{
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled,(state,action) =>{
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user
            })
            .addCase(checkAuth.rejected,(state,action) =>{
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null
            })
            .addCase(logoutUser.fulfilled,(state) =>{
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null
            })
    }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer