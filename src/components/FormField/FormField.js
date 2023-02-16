import React from "react";
const FormField = ({ children }) => {
    return (
        <div className="form-field">
            { children }
        </div>
    )
}

const FormSubField = ({ children }) => {
    return (
        <div className="form-subfield">
            { children }
        </div>
    )
}

export {
    FormField,
    FormSubField
}
