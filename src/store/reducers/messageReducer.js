const initState = {
    messages: [
        {id: 1, title: 'Yoshi', content:'YoYoYo is yoshi'},
        {id: 2, title: 'Peach', content:'PePePe is peach'},
        {id: 3, title: 'Mario', content:'MaMaMa is mario'},
        {id: 4, title: 'Luigi', content:'LuLuLu is luigi'},
    ]
};

const messageReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_MESSAGE':
            console.log('message created', action.message)
            return state;
        case 'CREATE_MESSAGE_ERROR':
            console.log('messafe error', action.err)
            return state;
        default: 
            return state
    }
}

export default messageReducer;