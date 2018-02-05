import React from 'react'

var BoxMessage = ({messages }) => {
    return  (<div>
        <p>Global Chat</p>
        <div className="messages">
            {messages.map(message => {
                
                return (
                    <div>
                        {message.user!=''?message.user+': '+ message.message:message.message}
                    </div>
                )
            })}
        </div>
    </div>)
}

/*function BoxMessage(props){
    return <div>SORETA</div>
}*/

export default BoxMessage;
