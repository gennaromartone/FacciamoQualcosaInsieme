import { LOGIN,
 REQUEST_LOGIN,
LOGOUT,
RECEIVE_LOGIN, FETCH_USER } from './../actions/auth' 

import initialState from './initialState'

function authReducer(state = null, action){
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false
        case REQUEST_LOGIN:
            return {...state, isLogginIng:true}

        case RECEIVE_LOGIN:

            return {...state, user:action.data, receivedAt:action.receivedAt, isLogginIng:false}

        default:
            return state
    }
}

export default authReducer;