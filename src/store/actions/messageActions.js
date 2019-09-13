export const createMessage = (message) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('messages').add({
            ...message,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_MESSAGE', message})
        }).catch( err => {
            dispatch({type: 'CREATE_MESSAGE_ERROR', err})
        })
        
    }
}