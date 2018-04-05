import React, { Component } from 'react'

import InputForm from './../presentetional/InputForm'
import ButtonForm from './../presentetional/ButtonForm'

class FormContainer extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            banckAccounts:[
            ]
        };

        this.inputProperty = {
            firstName:{ 
                labelText:'First Name',
                errorText:''
            },
            lastName:{ 
                labelText:'Last Name',
                errorText:''
            },
            email:{
                labelText:'Email',
                errorText:''
            },
            iban:{
                labelText:'IBAN',
                errorText:''
            },
            bankName:{
                labelText:'Bank name',
                errorText:''
            }
        };

        this.bank = [];
        this.firstCheck = true;
        this.handleChange =  this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.addBankInputs = this.addBankInputs.bind(this)
    }

    componentDidMount() {

    }

    addBankInputs(){
        const nameInputIban = `iban${this.bank.length}`
        const nameInputBank = `bank${this.bank.length}`
        let bankState = this.state.banckAccounts
        this.bank.push(
            <InputForm onChange={this.handleChange} 
            labelName={this.inputProperty.iban.labelText}
            inputName={nameInputIban}
            value={this.state.firstName}  
            errorText={this.inputProperty.firstName.errorText}  />
        )

        this.bank.push(
            <InputForm onChange={this.handleChange} 
            labelName={this.inputProperty.bankName.labelText}
            inputName={nameInputBank}
            value={this.state.firstName}  
            errorText={this.inputProperty.firstName.errorText}  />
        )
        bankState.push({
                iban:'',
                bankName:'' 
        })

        this.setState({
            banckAccounts:bankState
        })

        
    }

    handleChange(ev){
        //console.log( ev.target.id.substring(0,5) );
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

    submitForm(){

       alert(JSON.stringify(this.state))
        
    }
    
    render() {
        return (
            <div>
                
                    <InputForm onChange={this.handleChange} 
                        labelName="First Name" 
                        inputName="firstName"
                        value={this.state.firstName}  
                        errorText={this.inputProperty.firstName.errorText}  />

                    <InputForm onChange={this.handleChange} 
                        labelName="Last Name" 
                        inputName="lastName"
                        value={this.state.lastName}  
                        errorText={this.inputProperty.lastName.errorText}  />

                        <InputForm onChange={this.handleChange} 
                        labelName="Email" 
                        inputName="email"
                        value={this.state.email}  
                        errorText={this.inputProperty.email.errorText}  />

                        <label>Bank Account</label>

                        <ButtonForm valueText="+ Add bank account" onClick={this.addBankInputs} typeButt="btn btn-add"/>

                        { this.bank.map(input => {
                            console.log(input)
                            return input
                        })}

                        <ButtonForm valueText="Submit!" onClick={this.submitForm} typeButt="btn btn-primary"/>
               
            </div>
        )
    }

    
}

export default FormContainer

