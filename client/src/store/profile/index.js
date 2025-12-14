import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    profile: null,
    error: null,
};

// Get profile
export const getProfile = createAsyncThunk(
    'profile/get',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/profile', {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            return rejectWithValue({
                message: error.response?.data?.message || 'Failed to fetch profile'
            });
        }
    }
);

// Update profile
export const updateProfile = createAsyncThunk(
    'profile/update',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.put('/api/profile/update', formData, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            return rejectWithValue({
                message: error.response?.data?.message || 'Failed to update profile'
            });
        }
    }
);

// Change password
export const changePassword = createAsyncThunk(
    'profile/changePassword',
    async (passwordData, { rejectWithValue }) => {
        try {
            const response = await axios.put('/api/profile/change-password', passwordData, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            return rejectWithValue({
                message: error.response?.data?.message || 'Failed to change password'
            });
        }
    }
);

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        clearProfile: (state) => {
            state.profile = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Get Profile
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profile = action.payload.data;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || 'Failed to fetch profile';
            })
            // Update Profile
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profile = action.payload.data;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || 'Failed to update profile';
            })
            // Change Password
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || 'Failed to change password';
            });
    }
});

export const { clearError, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
