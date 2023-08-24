import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Generates pending, fulfilled and rejected
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/useffrs")
    .then((response) => {
      return response.data.map((user) => user.id);
    });
});

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = null;
    });
  },
});

export default userSlice.reducer;
