const Message = ({ message }) => {
  return (
    <div className="bg-light px-2 m-2 rounded">
      <span className="text-info">{message.phone}</span>
      <p className="lead text-wrap mt-2" style={{ width: "100%" }}>
        {message.message}
      </p>
    </div>
  );
};

export default Message;
