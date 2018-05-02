import initialState from './initialState'

function searchReducer( state={}, action){
    
    switch (action.type) {
        case 'SEARCH_CATEGORIES_ACTION':
            return {...state, categories:action.categories}
           
    
        default:
            return state;
    }
}

export default searchReducer