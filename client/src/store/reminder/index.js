import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  reminders: [],
  error: null
};

// Get all reminders
export const getReminders = createAsyncThunk(
  'reminder/getReminders',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/api/reminder', {
        withCredentials: true
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Failed to fetch reminders' });
    }
  }
);

// Create a new reminder
export const createReminder = createAsyncThunk(
  'reminder/createReminder',
  async (reminderData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/reminder/create',
        reminderData,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Failed to create reminder' });
    }
  }
);

// Update a reminder
export const updateReminder = createAsyncThunk(
  'reminder/updateReminder',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/reminder/update/${id}`,
        data,
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Failed to update reminder' });
    }
  }
);

// Delete a reminder
export const deleteReminder = createAsyncThunk(
  'reminder/deleteReminder',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/reminder/delete/${id}`,
        { withCredentials: true }
      );
      return { ...response.data, id };
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Failed to delete reminder' });
    }
  }
);

// Send test reminder email
export const sendTestReminder = createAsyncThunk(
  'reminder/sendTestReminder',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/reminder/test/${id}`,
        {},
        { withCredentials: true }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: 'Failed to send test email' });
    }
  }
);

const reminderSlice = createSlice({
  name: 'reminder',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get reminders
      .addCase(getReminders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getReminders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reminders = action.payload.data || [];
      })
      .addCase(getReminders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Create reminder
      .addCase(createReminder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createReminder.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.data) {
          state.reminders.unshift(action.payload.data);
        }
      })
      .addCase(createReminder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update reminder
      .addCase(updateReminder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateReminder.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.reminders.findIndex(r => r._id === action.payload.data._id);
        if (index !== -1) {
          state.reminders[index] = action.payload.data;
        }
      })
      .addCase(updateReminder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Delete reminder
      .addCase(deleteReminder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteReminder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reminders = state.reminders.filter(r => r._id !== action.payload.id);
      })
      .addCase(deleteReminder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Send test reminder
      .addCase(sendTestReminder.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendTestReminder.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(sendTestReminder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError } = reminderSlice.actions;
export default reminderSlice.reducer;
