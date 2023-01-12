import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const stateContacts = useSelector((state) => state.contacts.contacts);

  return (
    <>
      {stateContacts.map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
