import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import RegisterForm from './RegisterForm'

import * as actions from './../../../actions/userRegistration'


class RegisterModal extends Component{
    

   /* renderInputFrom(){
        
        for( let key in this.inputProperty ){
            console.log(key)
            let element = this.inputProperty[key] 

           let m =  <InputForm onChange={this.handleChange} 
            labelName="Email" 
            inputName="email"
            value={this.state.email}  
            errorText={this.inputProperty.email.errorText}  />
        }

        <form>
                <div className="form--field">
                  <input required id="firstName" type="input" className="form--input" />
                  <label className="form--label"  htmlFor="firstName">First Name </label>
                </div>

                <div className="form--field">
                  <input required id="lastName" type="input" className="form--input" />
                  <label className="form--label"  htmlFor="email">Last Name</label>
                </div>

                <div className="form--field">
                  <input required id="email" type="email" className="form--input" />
                  <label className="form--label"  htmlFor="email">Email</label>
                </div>

                <div className="form--field">
                  <input required id="password" type="password" className="form--input" />
                  <label className="form--label" htmlFor="password">Password</label>
                </div>

                <div className="form--botton" onClick=""><span>Registrati</span></div>

             </form>
        
    }*/

    render(){

        //this.renderInputFrom();
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        return (
            <div>
        <div className="overlay" onClick={this.props.onClose} />
           <div className="form"> 
            <div className="form--login">
             

                <div>Registrati con Gmail o Facebook</div>

                <div className="hr"><span >oppure</span></div>
     
                <RegisterForm isFetching={this.props.isFetching} onSubmitForm={this.props.registerUser}/>

                
                <div>Hai gi&agrave; un account? <a href="#">Accedi </a></div>

                <button  onClick={this.props.onClose} className="overlay-close">
                X
                </button>
            </div>
          </div>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { isFetching } = state
console.log('RITORNA: ',state)
    return {
        isFetching:state.auth.isFetching
    }
}

export default connect(mapStateToProps,actions)(RegisterModal)

RegisterModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};