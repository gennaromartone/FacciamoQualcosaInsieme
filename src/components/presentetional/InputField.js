import React from 'react'

export default ({input, name, label, meta:{ touched, error} }) => {
        if( label === 'Password')
            return(
            <div className="form--field">
                <input type="password" {...input} className="form--input" />
                <label className="form--label"  htmlFor="email">{label}</label>
                {touched && <div className="error" >{error} </div>}
            </div>)
        return(
            <div className="form--field">
                <input  {...input} className="form--input" />
                <label className="form--label"  htmlFor="email">{label}</label>
                {touched && <div className="error" >{error} </div>}
            </div>
        )

}