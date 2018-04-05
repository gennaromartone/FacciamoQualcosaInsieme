import React from 'react'

export default ({input, label, meta:{ touched, error} }) => {

        return(
            <div className="form--field">
                <input  {...input} className="form--input" />
                <label className="form--label"  htmlFor="email">{label}</label>
                {touched && <div className="error" >{error} </div>}
            </div>
        )

}