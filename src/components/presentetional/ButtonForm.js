import React from 'react'
import PropTypes from 'prop-types'

const InputForm = ({ onClick, typeButt, valueText }) => (
  
    <button className={typeButt}
          onClick={ onClick }>{valueText}</button>

)

InputForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default InputForm


