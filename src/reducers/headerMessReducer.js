import * as fetch from './../actions/fetchingAction'

function headerMessReducer(state = {error:false, errorMess:'', mess:'', display:false}, action){
    switch (action.type) {
        

        case fetch.ERROR:
            return {...state, error: true, errorMess:action.error, display:true}


        default:
            return state
    }
}

export default headerMessReducer;