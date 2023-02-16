import React from "react";
import "./Text.scss"

const Text = ({...props}) => {
    return (
        <div
            className={`text ${!!props.textAlign ? props.textAlign : ''}`}>
            {props.content}
        </div>
    )
}

export default Text