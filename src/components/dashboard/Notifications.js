import React from "react";
import moment from "moment";

const Notifications = ({ notifications }) => {
  return (
    <div>
      <div className="section">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="notifications">
              {notifications &&
                notifications.map(notif => {
                  return (
                    <li key={notif.id}>
                      <p className="orange-text darken-2">{notif.user}</p>
                      <p>{notif.content}</p>
                      <div className="grey-text note-date">
                        {moment(notif.date.toDate()).fromNow()}
                      </div>
                      <br />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
