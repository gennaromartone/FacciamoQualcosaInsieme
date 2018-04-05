import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from './../../../actions/auth'

class SurveyPayments extends Component{

    render(){

        return(

            <StripeCheckout
                name="Surveys Payments"
                description="Add credits for your account"
                amount={500}
                token={ token => {
                    this.props.handleTokenPayments(token);
                }}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <li>Add Credits</li>
            </StripeCheckout>
        )
    }
}

export default connect(null,actions)( SurveyPayments)