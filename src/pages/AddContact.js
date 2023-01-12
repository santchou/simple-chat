import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import { showContactForm } from "../features/contacts/contactSlice";

let AddContact = () => {
  const stateContascts = useSelector((state) => state.contacts.contacts);
  const stateIsContactFormShow = useSelector(
    (state) => state.contacts.isContactFormShow
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onContact = () => {
    navigate("/messages");
  };

  const handleForm = () => {
    dispatch(showContactForm());
  };
  return (
    <>
      <Header
        btnNameLeft="Go Home"
        desc="Your Contact"
        btnNameRight="Go to message"
        handleClick={onContact}
      />
      <div className="w-100 mt-5 d-flex justify-content-center">
        <div className="form-wrapper container border p-5 shadow">
          <div className="mb-4 text-end">
            <button className="btn btn-primary fw-bold" onClick={handleForm}>
              {!stateIsContactFormShow ? "Close" : "Show"} Form
            </button>
          </div>
          {!stateIsContactFormShow && <FormContact />}

          {stateContascts.length === 0 ? "No contact Added" : <Contacts />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddContact;
