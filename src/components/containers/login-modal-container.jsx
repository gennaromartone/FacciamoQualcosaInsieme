import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputForm from './../presentetional/InputForm'
import ButtonForm from './../presentetional/ButtonForm'

export default class LoginModal extends Component{
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:''
        }

        this.inputProperty = {
            password:{ 
                labelText:'Password',
                errorText:''
            },
            email:{
                labelText:'Email',
                errorText:''
            }
        };

        this.firstCheck = true;
        this.handleChange =  this.handleChange.bind(this);
    }

    handleChange(ev){
        console.log( ev.target.id.substring(0,5) );
        this.setState({
           [ev.target.id]: ev.target.value
        })

        if (ev.target.value.length === 1) {
            let newProp = {[ev.target.id]: {errorText:'', labelText:ev.target.name}}
            this.inputProperty = {...this.inputProperty, ...newProp}
        }

        if( ev.target.value === ''){
            let newProp = {[ev.target.id]: {errorText:`${[ev.target.name]} is required`, labelText:ev.target.name}}
           this.inputProperty = {...this.inputProperty, ...newProp}
        }
        else if(ev.target.id.substring(0,5) == 'email' && ev.target.value.length != '' ){
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            
            if (!reg.test(ev.target.value))
            {
                if( this.firstCheck){
                    let newProp = {[ev.target.id]: {errorText:`Value should be a valid Email`, labelText:ev.target.name}}
                    this.inputProperty = {...this.inputProperty, ...newProp}
                    this.firstCheck = false;
                }
            }
            else{
                let newProp = {[ev.target.id]: {errorText:'', labelText:ev.target.name}}
                this.inputProperty = {...this.inputProperty, ...newProp}
                this.firstCheck = true;
            }
        }
    }

    render(){

        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        return (
            <div>
            <div className="overlay" >
                <div className="overlay-modal">
                    <h3>Login</h3>

                    <InputForm onChange={this.handleChange} 
                        labelName="Email" 
                        inputName="email"
                        value={this.state.email}  
                        errorText={this.inputProperty.email.errorText}  />

                    <InputForm onChange={this.handleChange} 
                        labelName="Password" 
                        inputName="password"
                        value={this.state.password}  
                        errorText={this.inputProperty.password.errorText}  />

                    <button onClick={this.props.onClose} className="overlay-close">X</button> 
                </div>
                </div>
            </div>
        )
    }
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};