import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  isContactFormShow: false,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addNewContact: (state, { payload }) => {
      state.contacts.push({ ...payload });
    },
    showContactForm: (state) => {
      state.isContactFormShow = !state.isContactFormShow;
    },
  },
});

export const { addNewContact, showContactForm } = contactSlice.actions;

export default contactSlice.reducer;
