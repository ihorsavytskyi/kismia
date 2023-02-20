import React from "react";
import "./Button.scss"
const Button = ({...props}) => {

    return (
        <>
            {
                (!!props.type && props.type === "submit") ? (<button
                    className="button"
                    type={props.type}
                    disabled={props.disabled}>
                    <span className="button-text">{props.text}</span>
                </button>) : (<button
                    className="button"
                    onClick={() => props.handleClick(props.text)}>
                    {props.icon &&
                        <img className="button-icon" src={props.icon} alt={props.text}/>
                    }
                    <span className="button-text">{props.text}</span>
                </button>)
            }
        </>
    )
}

export default Button