import React, { Component } from 'react'
import FormContainer from './FormContainer'



export default class Home extends Component {

    static fetchData({ store }) {
        return new Promise(resolve => resolve());//default
    }
    
    render() {
        return (
            <div className="content">
               <FormContainer /> 
                
            </div>
        )
    }
}