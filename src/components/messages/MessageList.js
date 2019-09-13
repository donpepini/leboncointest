import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import MessageSchema from "./MessageShema";

const MessageList = ({ messages, auth }) => {

  //warning configuration
  toast.configure({
    autoClose: 5000,
    draggable: false,
  });

  //handle warning
  const showWarning = () => {
    toast.error("You need to login to see this message !", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  }

  return (
    <div className="message-list section">
      {messages &&
        messages.map(msg => {
          if (msg.visibility || (!msg.visibility && auth.uid)) {
            return (
              <Link to={`message/${msg.id}`} key={msg.id}>
                <MessageSchema message={msg} />
              </Link>
            );
          } else {
            return (
              <Link to={`/`} onClick={showWarning} key={msg.id}>
                <MessageSchema message={msg} />
              </Link>
            );
          }
        })}
        <ToastContainer/>
    </div>
  );
};

export default MessageList;
