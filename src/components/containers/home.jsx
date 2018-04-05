import React, { Component } from 'react'
import Landing from './Landing'



export default class Home extends Component {

    static fetchData({ store }) {
        return new Promise(resolve => resolve());//default
    }
    
    render() {
        return (
            <div className="content">
               <Landing /> 
                
            </div>
        )
    }
}