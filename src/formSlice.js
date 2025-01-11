import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { updateField } = formSlice.actions;

export default formSlice.reducer;
