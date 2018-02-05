import React, { Component } from 'react'
import Chat from './Chat'
import PropTypes from 'prop-types'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isChatBoxActive:false
        }

        this.handleChatBox = this.handleChatBox.bind(this);

    }

    handleChatBox() {
        if( this.state.isChatBoxActive === true )
            this.setState({isChatBoxActive:false} )
        else
            this.setState({isChatBoxActive:true} )
    }
/* prima che il componente venga montato */
    componentWillMount() {

    }
/* Il componente è stato montato */
    componentDidMount() {

    }
/* quando distruggi il componente */
    componentWillUnmount() {

    }

    render() {

        const isActive = this.state.isChatBoxActive;
        let boxChat = null;
        if( isActive )
            boxChat = <Chat/>
        else
            boxChat = null;
            
        return (
            <div className="footer">
                <button onClick={this.handleChatBox} className="btn btn-primary form-control">Attiva Chat</button>
                { boxChat }
                
                
            </div>
        )
    }
}

Footer.propTypes = {

}

export default Footer