import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

//components
import Notifications from "./Notifications";
import MessageList from "../messages/MessageList";

class Dashboard extends Component {
  render() {
    const { messages, notifications, auth } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MessageList messages={messages} auth={auth} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

//get authentication informations, all messages and notifications
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    messages: state.firestore.ordered.messages,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  
  //collection requests to firestore
  firestoreConnect([
    { collection: "messages", limit: 6, orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 4, orderBy: ["date", "desc"] }
  ])
)(Dashboard);
