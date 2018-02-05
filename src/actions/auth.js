export const LOGIN = 'LOGIN'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

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