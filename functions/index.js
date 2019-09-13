const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//add notification to firestore database
const createNotification = notification => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then(doc => {
      console.log("notification add", doc);
    });
};

//create notification when user create message
exports.messageCreated = functions.firestore
  .document("messages/{messageId}")
  .onCreate(doc => {
    const message = doc.data();
    const notification = {
      content: "Posted a message",
      user: `${message.authorFirstName} ${message.authorLastName}`,
      date: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
  });

//create notification when user signs up
exports.userCreated = functions.auth
    .user()
    .onCreate(user => {
        return admin.firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(doc => {
            const newUser = doc.data();
            const notification = {
                content: 'Joined the crew!',
                user: `${newUser.firstName} ${newUser.lastName}`,
                date: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification)
        })
    })
