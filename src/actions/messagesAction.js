const NEW_MESSAGE = 'NEW_MESSAGE';

/* in data we have the user and the text */

export function newMessage(data){
    return {
        type: NEW_MESSAGE,
        data
    }
}
