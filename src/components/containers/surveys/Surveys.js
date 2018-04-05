import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Surveys extends Component {
 

  render() {
    return (
      <div className="content">
        <h1>Surveys page</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default Surveys
//export default connect(mapStateToProps, mapDispatchToProps)(Survays)
