import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom'


//import './../../../sass/style.scss'

export default class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.inputProperty = {
      password: {
        labelText: 'Password',
        errorText: '',
      },
      email: {
        labelText: 'Email',
        errorText: '',
      },
    };

    this.firstCheck = true;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    console.log(ev.target.id.substring(0, 5));
    this.setState({
      [ev.target.id]: ev.target.value,
    });

    if (ev.target.value.length === 1) {
      let newProp = {
        [ev.target.id]: {errorText: '', labelText: ev.target.name},
      };
      this.inputProperty = {...this.inputProperty, ...newProp};
    }

    if (ev.target.value === '') {
      let newProp = {
        [ev.target.id]: {
          errorText: `${[ev.target.name]} is required`,
          labelText: ev.target.name,
        },
      };
      this.inputProperty = {...this.inputProperty, ...newProp};
    } else if (
      ev.target.id.substring(0, 5) == 'email' &&
      ev.target.value.length != ''
    ) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (!reg.test(ev.target.value)) {
        if (this.firstCheck) {
          let newProp = {
            [ev.target.id]: {
              errorText: `Value should be a valid Email`,
              labelText: ev.target.name,
            },
          };
          this.inputProperty = {...this.inputProperty, ...newProp};
          this.firstCheck = false;
        }
      } else {
        let newProp = {
          [ev.target.id]: {errorText: '', labelText: ev.target.name},
        };
        this.inputProperty = {...this.inputProperty, ...newProp};
        this.firstCheck = true;
      }
    }
  }

  render() {
    // Render nothing if the "show" prop is false
    const stile = {textAlign:'center',width:'100%'}
    const isFetching = false;
    const redirect = () => {
      window.location.href = '/auth/google'
    }
    if (!this.props.show) {
      return null;
    }

    return <div>
        <div className="overlay" onClick={this.props.onClose} />
        <div className="form">
          <div className="form--login">
            <div className="form--title">
              <span>Accedi per proseguire</span>
            </div>

            <div className="form--field">
              <input id="password" type="password" className="form--input" />
              <label className="form--label" htmlFor="password">
                Password
              </label>
            </div>

            <div className="form--field">
              <input id="email" type="email" className="form--input" />
              <label className="form--label" htmlFor="email">
                Email
              </label>
            </div>

            {isFetching && <div style={stile}>
                <button className="form--botton form--botton__spinning" type="submit">
                  <span>Registering...</span>
                </button>
              </div>}
            {!isFetching && <div style={stile}>
                <button className="form--botton" type="submit">
                  <span>Accedi</span>
                </button>
              </div>}

              <div className="hr"><span >oppure prosegui con</span></div>
            <div style={stile}>
                  
              <button onClick={redirect} className="form--botton">
                <span>Accedi con Google</span>
              </button>
              
            </div>
            <button onClick={this.props.onClose} className="overlay-close">
              X
            </button>
          </div>
        </div>
      </div>;
  }
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};
