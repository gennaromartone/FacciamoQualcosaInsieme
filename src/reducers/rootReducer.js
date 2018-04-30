import { combineReducers } from 'redux'

import messagesReducer from './messagesReducer'
import searchReducer from './searchReducer'
import authReducer from './authReducer'
import headerMessReducer from './headerMessReducer'

import {reducer as formRegisterReducer} from 'redux-form'

const rootReducer = combineReducers({
    chat: messagesReducer,
    dataFormSearch: searchReducer,
    auth: authReducer,
    form: formRegisterReducer,
    headerMess: headerMessReducer
})

export default rootReducer