import { LOGIN,
 REQUEST_LOGIN,
LOGOUT,
RECEIVE_LOGIN, FETCH_USER } from './../actions/auth' 

import {REGISTER_USER_BY_FORM} from './../actions/userRegistration'

import initialState from './initialState'

function authReducer(state = null, action){
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false

        case REGISTER_USER_BY_FORM:
            return action.payload

        case REQUEST_LOGIN:
            return {...state, isLogginIng:true}

        case RECEIVE_LOGIN:

            return {...state, user:action.data, receivedAt:action.receivedAt, isLogginIng:false}

        default:
            return state
    }
}

export default authReducer;