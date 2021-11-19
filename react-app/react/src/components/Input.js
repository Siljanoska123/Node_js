import React from 'react';
import PropTypes from 'prop-types';

export function Input(props){

    return(
        <p>
            <input 
                type={props.type}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />

            {props.name === "password" ? <button type="button" className="eye-button" onClick={props.togglePassword} >
                <i className={props.type === "password" ? "fa fa-eye-slash" : "fa fa-eye"} ></i>  
            </button> : null }
        </p>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    togglePassword:PropTypes.func
}