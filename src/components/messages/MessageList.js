import React from "react";
import { Link } from "react-router-dom";

//components
import MessageSchema from "./MessageShema";

const MessageList = ({ messages }) => {
  return (
    <div className="message-list section">
      {messages &&
        messages.map(msg => {
          return (
            <Link to={`message/${msg.id}`} key={msg.id}>
              <MessageSchema message={msg} />
            </Link>
          );
        })}
    </div>
  );
};

export default MessageList;
