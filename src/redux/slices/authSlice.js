import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// Async thunk for registration
export const registerUser = createAsyncThunk('auth/registerUser', async (userData) => {
  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Failed to register');
  }

  return await response.json(); // Return the response data (user data)
});

// Create the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Assume payload contains user data
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // Save user data
        state.isLoggedIn = true; // Set logged in status
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Capture error message
      });
  },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
