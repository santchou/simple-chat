import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isMessageFormShow: false,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addNewMessage: (state, { payload }) => {
      state.messages.push({ ...payload });
    },
    showMessageForm: (state) => {
      state.isMessageFormShow = !state.isMessageFormShow;
    },
  },
});

export const { addNewMessage, showMessageForm } = messageSlice.actions;

export default messageSlice.reducer;
