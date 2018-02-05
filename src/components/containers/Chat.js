import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as messageAction from './../../actions/messagesAction.js'
import { bindActionCreators } from 'redux'
import io from "socket.io-client";

import BoxMessage from './../presentetional/BoxMessage'
import UserDashBoard from './../presentetional/UserDashBoard'

class Chat extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            username:'',
            message:'',
            messages:[]
        }

        this.setUsername =  this.setUsername.bind(this);
        this.setMessage =  this.setMessage.bind(this);
        this.sendMessage =  this.sendMessage.bind(this);
       // this.addMessage =  this.addMessage.bind(this);

        //this.socket = io('localhost:8080');
    }

    componentDidMount() {
      //this.socket.on('RECEIVE_MESSAGE', this.props.addMessage)
      this._handleMessageEvent()
      console.log(this.props)
    }
    
    _handleMessageEvent(){
        console.log('eccomiiiii')
        socket.on('RECEIVE_MESSAGE', (inboundMessage) => {
         //   console.log('received message', inboundMessage)
           this.props.addMessage(inboundMessage) 
           console.log('received message', inboundMessage)
         })
      }
    /*addMessage(data){
        //this.setState({messages:[...this.state.messages, data]})
        dispatch(messageAction.newMessage(data));
    }*/
    

     sendMessage(ev) {
        ev.preventDefault();
        socket.emit('SEND_MESSAGE', {
            user: this.state.username,
            message: this.state.message
        })
        this.setState({message: ''});

    }

   

    setUsername(ev){
        this.setState({ username: ev.target.value })
    }

    setMessage(ev){
        this.setState({ message: ev.target.value })
    }
    

    render() {
        return (
            <div>
                <BoxMessage messages={this.props.messages} />
                <UserDashBoard setUsername={this.setUsername} username={this.state.username}
                        setMessage={this.setMessage} message={this.state.message} 
                        sendMessage={this.sendMessage}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        messages: state.messagesReducer.messages
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
   /* return {
        addMessage: data => {
            console.log('DISPACCIO')
            dispatch(messageAction.newMessage(data))
        }
    }*/
    return bindActionCreators({ addMessage: messageAction.newMessage}, dispatch)
}

Chat = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Chat)

  export default Chat

