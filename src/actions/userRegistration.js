import axios from 'axios'
import * as fetchingAction from './fetchingAction'

export const REGISTER_USER_BY_FORM='REGISTER_USER_BY_FORM'

export const registerUser = (values,history) => async dispatch => {

    dispatch(fetchingAction.fetchingNow());

    try{
        const register = await axios.post('/api/user/register', values);

        history.push('/user-page');
        
        dispatch({ type:REGISTER_USER_BY_FORM, payload: register.data})
    }
    catch(err){

        dispatch( { type:fetchingAction.ERROR, error:err} )
    }
    

}