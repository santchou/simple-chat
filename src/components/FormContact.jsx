import { reduxForm, Field } from "redux-form";
import {
  addNewContact,
  showContactForm,
} from "../features/contacts/contactSlice";
import { useDispatch } from "react-redux";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.phone) {
    errors.phone = "Required";
  }
  return errors;
};

const renderInput = ({ input, meta: { touched, error }, label, type }) => (
  <div className="mb-3">
    <label className="d-block fw-bold">{label}</label>
    <input
      {...input}
      type={type}
      placeholder={label}
      className="p-2 w-100 rounded"
    />
    {error && touched && <span className="text-danger">{error}</span>}
  </div>
);

let FormContact = ({ handleSubmit, reset, type }) => {
  const dispatch = useDispatch();
  const submit = ({ name, phone }) => {
    dispatch(addNewContact({ name, phone }));
    dispatch(showContactForm());
  };
  return (
    <form onSubmit={handleSubmit(submit)} className="border-bottom pb-5 mb-3">
      <div>
        <Field name="name" label="Name" type="text" component={renderInput} />
      </div>
      <div>
        <Field name="phone" label="Phone" type="text" component={renderInput} />
      </div>
      <div className="d-flex justify-content-around mt-4">
        <button
          type="submit"
          className="btn btn-primary text-white fw-bold px-4"
        >
          Add Contact
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

FormContact = reduxForm({
  form: "contact",
  destroyOnUnmount: false,
  validate,
})(FormContact);

export default FormContact;
