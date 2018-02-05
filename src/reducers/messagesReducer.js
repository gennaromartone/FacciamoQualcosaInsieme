import initialState from './initialState';
import { combineReducers } from 'redux'

function messagesReducer( state=initialState.chat, action){

    console.log(action.type)
    switch (action.type) {
        case 'NEW_MESSAGE':
            
            //return [...state, action.message]

            return Object.assign( {}, state,{
                messages:[...state.messages, action.data]
            })

           console.log(action)

           //return [ ...state, action.data]
    
        default:
            return state;
    }
}

export default messagesReducer
