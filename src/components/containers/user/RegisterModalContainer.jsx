import React, { Component } from 'react'
import PropTypes from 'prop-types'

import RegisterForm from './RegisterForm'


export default class RegisterModal extends Component{
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
        //this.renderInputFrom = this.renderInputFrom.bind(this);
    }
// GESTIRE IL TUTTO CON REDUX

    handleChange(ev){
        console.log( ev.target.id.substring(0,5) );
        this.setState({
           [ev.target.id]: ev.target.value
        })

      //  let id = ev.target.id;

      //  let arr = [{id:'0'},{id:'1'}]
      //  arr.map( obj => { obj.id === id? obj.text)

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
     
                <RegisterForm/>

                
                <div>Hai gi&agrave; un account? <a href="#">Accedi </a></div>

                <button onClick={this.props.onClose} className="overlay-close">
                X
                </button>
            </div>
          </div>
        </div>
        )
    }
}

RegisterModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};