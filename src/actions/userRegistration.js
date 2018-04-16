import axios from 'axios'
import fetchingAction from './fetchingAction'

export const REGISTER_USER_BY_FORM='REGISTER_USER_BY_FORM'

export const registerUser = (values,history) => async dispatch => {

    dispatch(fetching);

    const register = await axios.post('/api/user/register', values);

    history.push('/');

    dispatch({ type:REGISTER_USER_BY_FORM, payload: register.data})

}