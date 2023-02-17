import React from "react";
import "./Select.scss"
import { useInput } from "../../hooks/useInput";

const Select = ({ attr }) => {

    const inputField = useInput('', {
        isEmpty: true,
        minlength: 2,
        maxLength: 80,
        pattern: '^[a-zA-Z ]*$'
    })

    return (
        <label className="select-label">
            <select
                className="select-field"
                name={attr.name}>
                { attr.placeholder }
                <option value={attr.placeholder}>{attr.placeholder}</option>
            </select>
        </label>
    )
}

export default Select