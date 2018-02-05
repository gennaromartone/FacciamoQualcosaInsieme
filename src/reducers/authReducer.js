import { LOGIN,
 REQUEST_LOGIN,
LOGOUT,
RECEIVE_LOGIN } from './../actions/auth' 

import initialState from './initialState'

function authReducer(state = initialState.user, action){
    switch (action.type) {
        case REQUEST_LOGIN:
            return {...state, isLogginIng:true}
        case RECEIVE_LOGIN:

            return {...state, user:action.data, receivedAt:action.receivedAt, isLogginIng:false}

        default:
            return state
    }
}

export default authReducer;