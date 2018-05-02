import axios from 'axios'
const SEARCH_CATEGORIES_ACTION = 'SEARCH_CATEGORIES_ACTION'

export const searchCategories = () => async dispatch => {

    try{
        const categories = await axios.get('/getShoopCategories');
        
        dispatch ({ type: SEARCH_CATEGORIES_ACTION, categories:categories.data });
    }
    catch(err){
        console.log('ERRORE: ',err)
    }
}

