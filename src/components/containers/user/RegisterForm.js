import React, {Component} from 'react';

import {reduxForm, Field} from 'redux-form';

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
      return <Field key={name} label={label} component={InputField} type="text" name={name} />
    })

  }

  render() {

    return (

      <form onSubmit={this.props.handleSubmit(values => console.log(values))}>

        {this.renderFields()}

        <button className="form--botton" type="submit"><span>Registrati</span></button>
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
  validate, // ES& is validate:validate
  form: 'registerForm',
})(RegisterForm);
