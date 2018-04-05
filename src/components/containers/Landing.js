import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Landing extends Component {
  

  render() {
    return (
      <div>
        <h1>LANDING PAGE</h1>
      </div>
    )
  }
}

Landing.propTypes = {
    
  }

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
