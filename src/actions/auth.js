import axios from 'axios'

export const LOGIN = 'LOGIN'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const FETCH_USER = 'FETCH_USER'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/google/current_user')
    dispatch({ type:FETCH_USER, payload:res.data })  
}  
// handle the token and dispatch fecth user
export const handleTokenPayments = (token) => async dispatch => {
    const res = await axios.post('/api/stripe/payments',token)
    dispatch({ type:FETCH_USER, payload:res.data })  
}  

   // payload = fetchUser()(dispatch)

export const login = (user) => {
    return {
        type: LOGIN,
        user
    };
};
 
export const logout = () => {
    return {
        type: LOGOUT
    };
};



function requestLogin(user) {
  return {
    type: REQUEST_LOGIN,
    user
  }
}


function receivelogin(user, json) {
  return {
    type: RECEIVE_LOGIN,
    user,
    data: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
 
export const signup = (username, password) => {
    return (dispatch) => {
    };
};