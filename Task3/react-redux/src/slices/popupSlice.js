import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showPopup: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.showPopup = !state.showPopup;
    },
    closePopup: (state) => {
      state.showPopup = false;
    },
    openPopup: (state) => {
      state.showPopup = true;
    },
  },
});

export const { togglePopup, closePopup, openPopup } = popupSlice.actions;
export default popupSlice.reducer;