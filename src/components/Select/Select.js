import React from "react";

const Select = ({ attr }) => {
    return (
        <label className="select-label">
            <select
                className="select-field"
                name={attr.name}
                value>
                { attr.placeholder }
            </select>
        </label>
    )
}

export default Select