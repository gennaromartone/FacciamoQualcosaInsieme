import React from 'react'


function UserDashBoards(props) {
    return (<div className="card-footer">
        <input type="text" placeholder="Username" value={props.username} onChange={props.setUsername} className="form-control" />
        <br />
        <input type="text" placeholder="Message" className="form-control" value={props.message} onChange={props.setMessage} />
        <br />
        <button onClick={props.sendMessage} className="btn btn-primary form-control">Send</button>
    </div>)
}

export default UserDashBoards;