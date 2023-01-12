import { useNavigate } from "react-router-dom";
import FormMessage from "../components/FormMessage";
import Header from "../components/Header";
import Messages from "../components/Messages";
import { useDispatch, useSelector } from "react-redux";
import { showMessageForm } from "../features/messages/messageSlice";
import Footer from "../components/Footer";

const AddMessage = () => {
  const stateMessages = useSelector((state) => state.messages.messages);
  const stateIsMessageFormShow = useSelector(
    (state) => state.messages.isMessageFormShow
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onMessage = () => {
    navigate("/contacts");
  };

  const handleClick = () => {
    dispatch(showMessageForm());
  };

  return (
    <>
      <Header
        btnNameLeft="Go Home"
        desc="Your Message"
        btnNameRight="Go to Contact"
        handleClick={onMessage}
      />
      <div className="w-100 mt-5 d-flex justify-content-center">
        <div className="form-wrapper container border p-5 shadow">
          <div className="mb-4 text-end">
            <button className="btn btn-primary fw-bold" onClick={handleClick}>
              {!stateIsMessageFormShow ? "Show" : "Close"} Form
            </button>
          </div>
          {!stateIsMessageFormShow && <FormMessage />}

          {stateMessages.length === 0 ? "No message send to you" : <Messages />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddMessage;
