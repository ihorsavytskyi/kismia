import React from "react";
import "./FormField.scss"
import {getSplitString} from "../../helpers/getSplitString";
const FormField = ({ children }) => {
    return (
        <div className="form-field">
            { children }
        </div>
    )
}

const FormSubField = ({ children, ...props }) => {

    // console.log(getSplitString(props.flex, false, " "))

    return (
        <div
            className="form-subfield"
            style={{flex: props.flex.join(" ")}}>
            { children }
        </div>
    )
}

export {
    FormField,
    FormSubField
}
