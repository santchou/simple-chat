import { useSelector } from "react-redux";
import Message from "./Message";

const Messages = () => {
  const stateMessages = useSelector((state) => state.messages.messages);

  return (
    <>
      {stateMessages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </>
  );
};

export default Messages;
