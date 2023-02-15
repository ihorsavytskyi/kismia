import React from "react";
import "./Button.scss"
const Button = ({...props}) => {

    console.log(props)

    return (
        <button className="button" onClick={() => props.handleClick(props.text)}>
            {props.icon &&
                <img className="button-icon" src={props.icon} alt={props.text}/>
            }
            <span className="button-text">{props.text}</span>
        </button>
    )
}

export default Button