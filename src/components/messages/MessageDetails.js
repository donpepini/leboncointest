import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const MessageDetails = props => {
  const { message } = props;
  if (message) {
    return (
      <div className="container section message-details">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{message.title}</span>
            <p>{message.content}</p>
          </div>
          <div className="card-action grey lighten-5 grey-text right-align">
            <div>
              Posted by {message.authorFirstName} {message.authorLastName}
            </div>
            <div>{moment(message.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading message</p>
      </div>
    );
  }
};

//get independent message based on id
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const messages = state.firestore.data.messages;
  const message = messages ? messages[id] : null;
  return {
    message
  };
};

export default compose(
  connect(mapStateToProps),

  //collection requests to firestore
  firestoreConnect([{ collection: "messages" }])
)(MessageDetails);
