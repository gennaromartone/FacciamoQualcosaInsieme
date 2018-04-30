import React, {Component} from 'react';

import {reduxForm, Field} from 'redux-form';
import {withRouter} from 'react-router-dom'

import InputField from './../../presentetional/InputField'

const FIELDS = [
  {label: 'First Name', name: 'firstName' },
  {label: 'Last Name', name: 'lastName' },
  {label: 'Email', name: 'email' },
  {label: 'Password', name: 'password' }
]

class RegisterForm extends Component {

  renderFields(){

    return FIELDS.map( ({label, name}) => {
      if( name === 'password')
        return <Field key={name} label={label} component={InputField} type="password" name={name} />
      return <Field key={name} label={label} component={InputField} type="text" name={name} />
    })

  }

  render() {
    const stile = {textAlign:'center',width:'100%'}
    const { isFetching } = this.props
    console.log('RITORNA in PROPS: '+isFetching)
    return (

      <form onSubmit={this.props.handleSubmit(values => this.props.onSubmitForm(values,this.props.history))}>

        {this.renderFields()}

        {isFetching &&  <div style={stile}>
          <button className="form--botton form--botton__spinning" type="submit"><span>Registering...</span></button></div>}
        {!isFetching &&  <div style={stile}>
          <button className="form--botton" type="submit"><span>Register</span></button></div>}
       
      </form>
    );
  }
}

const validate = (values) => {
  let errors = {};

  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if( !values.firstName )
    errors.firstName = 'First Name is Required'

  if( !values.lastName )
    errors.lastName = 'Last Name is Required';
  
  if( !values.password )
    errors.password = 'Password is Required';

  if( !values.email )
    errors.email = 'Email is Required';
  else{
    if( !reg.test(values.email))
      errors.email = 'Value should be a valid Email'
  }

  return errors;
}

export default reduxForm({
  validate, // ES6 is validate:validate
  form: 'registerForm',
})(withRouter(RegisterForm));
