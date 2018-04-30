import React, { Component } from 'react'
import {connect} from 'react-redux'


class headerMessages extends Component{

    render(){

        const {error} = this.props;

        return(
            
            error?
            (<div className="headerMessages headerMessages--showMessage headerMessages--showMessage__error"><p>Devi confermare il tuo account, ti abbiamo inviato una mail al tuo indirizzo.</p></div>)
            :null
        )
        
        
    }
}

const mapStateToProps = (state) => {

    const {headerMess} = state;
    const {error,errorMess,mess} = headerMess;

    return {
        error,
        errorMess,
        mess
    }
}

export default connect(mapStateToProps)(headerMessages)