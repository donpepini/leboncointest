import React from "react";
import moment from "moment";

const MessageSchema = ({ message }) => {
  const visibility = message.visibility ? (
    <span className="green-text lighten-2 right">Public</span>
  ) : (
    <span className="red-text lighten-2 right">Private</span>
  );

  return (
    <div className="card message-schema">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{message.title}</span>
        <p>
          Posted by {message.authorFirstName} {message.authorLastName}
        </p>
        <div>
          <span className="grey-text">
            {moment(message.createdAt.toDate()).calendar()}
          </span>
          {visibility}
        </div>
      </div>
    </div>
  );
};

export default MessageSchema;
