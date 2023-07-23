import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const fetchTattoos = createAsyncThunk(
  'tattoos/fetchTattoos',
  async () => {
    const { data } = await axios.get('/tattoos');
    return data;
  }
);

const initialState = {
  tattoos: {
    items: [],
    status: 'loading',
  },
};

const tattooSlice = createSlice({
  name: 'tattoos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTattoos.pending]: state => {
      state.tattoos.items = [];
      state.tattoos.status = 'loading';
    },
    [fetchTattoos.fulfilled]: (state, action) => {
      state.tattoos.status = 'loaded';
      state.tattoos.items = action.payload;
    },
    [fetchTattoos.rejected]: state => {
      state.tattoos.items = [];
      state.tattoos.status = 'error';
    },
  },
});

export const tattoosReducer = tattooSlice.reducer;
