const Contact = ({ contact }) => {
  return (
    <div className="bg-light px-2 m-2 rounded">
      <span className="text-info">{contact.phone}</span>
      <p className="lead text-wrap mt-2" style={{ width: "100%" }}>
        {contact.name}
      </p>
    </div>
  );
};

export default Contact;
