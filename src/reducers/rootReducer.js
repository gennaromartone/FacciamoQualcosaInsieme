import { combineReducers } from 'redux'

import messagesReducer from './messagesReducer'
import searchReducer from './searchReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    messagesReducer,
    searchReducer,
    authReducer
})

export default rootReducer