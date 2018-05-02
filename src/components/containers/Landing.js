import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as searchCategories from './../../actions/searchAction';

import SelectInput from './../presentetional/SelectInput'

export class Landing extends Component {
  
  componentDidMount(){

      this.props.searchCategories();

  }

  render() {
    return <div>
        <div className="landing--section landing--section--title">
          <h5>Your favourite Products, delivered fast to your door.</h5>
          <p>
            Fairy Delivery helps you find out all the available products in
            your city, Let's explore.
          </p>
        </div>
        <div className="landing--section landing--section--searchForm">
          <div className="form--field__landing">
            <input name="lookFor" placeholder="What are you looking for?" type="text" className="form--input" />
            <label className="form--label" htmlFor="email" />
          </div>

          <div className="form--field__landing">
            <input name="lookFor" placeholder="Location" type="text" className="form--input" />
            <span className="form--span__arrow">
              <img className="locate-me2" alt="Find Me" src="/images/maps/locate-me.svg"></img>
            </span>
           
          </div>

          <div className="form--field__landing">
            <SelectInput name="lookFor" placeHolder="All Shops Category" categories={this.props.categories} />
          </div>

          <div className="form--field form--field__botton">
          <button className="form--botton" type="submit"><span>Search
            <svg style={{marginLeft:"5px"}} width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
              <title>ic_search</title>
              <desc>Created with Sketch.</desc>
              <defs />
              <g id="Icons" stroke="none"  strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="24-px-Icons" transform="translate(-27.000000, -171.000000)" stroke="#ffffff">
                  <g id="ic_search" transform="translate(24.000000, 168.000000)">
                    <g id="search">
                      <g transform="translate(4.000000, 4.000000)" strokeWidth="2">
                        <circle id="Oval-8" cx="7" cy="7" r="7" />
                        <path d="M16,16 L12.4644661,12.4644661" id="Line" strokeLinecap="round" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            </span></button>
          </div>

          <div style={{height: '200px'}} />
        </div>
      </div>;
  }
}

Landing.propTypes = {
    
  }

const mapStateToProps = (state) => {
//console.log('STATE ',state)
let categories = [{name:'mammt', id:1}];

//if( state.dataFormSearch.categories != null){
   categories = state.dataFormSearch.categories
//}
//console.log('STATE ',categories)
  return({
    categories
  })

}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, searchCategories)(Landing)
