import { LOGIN,
 REQUEST_LOGIN,
LOGOUT,
RECEIVE_LOGIN, FETCH_USER } from './../actions/auth' 

import * as fetch from './../actions/fetchingAction'

import {REGISTER_USER_BY_FORM} from './../actions/userRegistration'

import initialState from './initialState'

function authReducer(state = {isFetching:false}, action){
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false

        case REGISTER_USER_BY_FORM:
            return {...state, isFetching: false, user:action.payload}

        case fetch.FETCHING_START:
            return {...state, isFetching:true}

            /* GESTIRE ERRO SU REDUCERS GENERALE */


        case RECEIVE_LOGIN:

            return {...state, user:action.data, receivedAt:action.receivedAt, isLogginIng:false}

        default:
            return state
    }
}

export default authReducer;