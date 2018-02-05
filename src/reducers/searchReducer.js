import initialState from './initialState'

function searchReducer( state=initialState.resultSetFormSearch, action){
    
    switch (action.type) {
        case 'SEARCH_CATEGORIES_ACTION':
            
            break;
    
        default:
            return state;
    }
}

export default searchReducer