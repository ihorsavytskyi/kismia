import React, {useContext} from "react";
import "./Button.scss"
import {FormContext} from "../Form/Form";
const Button = ({...props}) => {

    const { isFormValid } = useContext(FormContext)

    return (
        <>
            {
                (!!props.type && props.type === "submit") ? (
                        <button
                            className="button"
                            type={props.type}
                            disabled={!isFormValid}>
                            <span className="button-text">{props.text}</span>
                        </button>
                    ) : (
                        <button
                            className="button"
                            onClick={() => props.handleClick(props.text)}>
                            {props.icon &&
                                <img className="button-icon" src={props.icon} alt={props.text}/>
                            }
                            <span className="button-text">{props.text}</span>
                        </button>
                )
            }
        </>
    )
}

export default Button