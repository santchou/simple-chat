import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import contactReducer from "../features/contacts/contactSlice";
import messageReducer from "../features/messages/messageSlice";

export default configureStore({
  reducer: {
    contacts: contactReducer,
    messages: messageReducer,
    form: formReducer,
  },
});
