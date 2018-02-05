const SEARCH_CATEGORIES_ACTION = 'SEARCH_CATEGORIES_ACTION'

export function searchCategories(dataFormSearch){
    return{
        type: SEARCH_CATEGORIES_ACTION,
        dataFormSearch
    }
}