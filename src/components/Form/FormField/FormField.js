import React from "react";
import {getSplitString} from "../../../utils/getSplitString";
import "./FormField.scss"

const FormField = ({ children }) => {
    return (
        <div className="form-field">
            { children }
        </div>
    )
}

const FormSubField = ({ children, ...props }) => {

    return (
        <div
            className="form-subfield"
            style={{flex: getSplitString(props.flex, " ")}}>
            { children }
        </div>
    )
}

export {
    FormField,
    FormSubField
}
