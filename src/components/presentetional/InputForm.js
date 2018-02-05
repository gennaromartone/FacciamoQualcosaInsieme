import React from 'react'
import PropTypes from 'prop-types'

const InputForm = ({ onChange, labelName, inputName, value, errorText }) => (
  
    <div className="form-group">
        <label>{labelName}</label>
        <input className="form-control"
            type="email"
            name={labelName}
            value={value}
            onChange={onChange}
            id={inputName} />
        <div className="error" >{errorText} </div>
    </div>

)

InputForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  labelName: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
}

export default InputForm