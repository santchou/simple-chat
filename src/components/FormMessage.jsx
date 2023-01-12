import { useDispatch, useSelector } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  addNewMessage,
  showMessageForm,
} from "../features/messages/messageSlice";

const validate = (values) => {
  const errors = {};
  if (!values.message) {
    errors.message = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  return errors;
};

const renderTextarea = ({ input, meta: { touched, error }, label }) => (
  <div className="mb-3">
    <label className="d-block fw-bold">{label}</label>
    <textarea
      {...input}
      placeholder="Your Message"
      className="p-2 w-100 rounded"
    />
    {error && touched && <span className="text-danger">{error}</span>}
  </div>
);

const renderSelect = ({
  input,
  meta: { touched, error },
  label,
  stateContacts,
}) => (
  <div className="mb-3">
    <label className="d-block fw-bold">{label}</label>
    <select {...input} className="p-2 w-100 rounded">
      <option></option>
      {stateContacts.map((contact, index) => (
        <option value={contact.phone} key={index}>
          {contact.phone}
        </option>
      ))}
    </select>
    {error && touched && <span className="text-danger">{error}</span>}
  </div>
);

let FromMessage = ({ handleSubmit, reset, type }) => {
  const dispatch = useDispatch();
  const stateContacts = useSelector((state) => state.contacts.contacts);

  const submit = ({ message, phone }) => {
    dispatch(addNewMessage({ message, phone }));
    dispatch(showMessageForm());
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="border-bottom pb-5 mb-3">
      <Field
        name="message"
        label="Message"
        type="text"
        component={renderTextarea}
      />

      <Field
        name="phone"
        label="Select Phone"
        stateContacts={stateContacts}
        component={renderSelect}
      />

      <div className="d-flex justify-content-around mt-4">
        <button
          type="submit"
          className="btn btn-primary text-white fw-bold px-4"
        >
          Send Message
        </button>
        <button
          type="button"
          className="btn bg-warning fw-bold"
          onClick={reset}
        >
          Clear values
        </button>
      </div>
    </form>
  );
};

FromMessage = reduxForm({
  form: "contact",
  destroyOnUnmount: false,
  validate,
})(FromMessage);

export default FromMessage;
