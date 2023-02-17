import React, { useState, useEffect } from "react";
import "./Input.scss"
import { useInput } from "../../hooks/useInput";

const Input = ({ attr }) => {

    const inputField = useInput('', {
        isEmpty: true,
        minLength: 2,
        maxLength: 80,
        pattern: '^[a-zA-Z ]*$'
    })

    return (
        <label>
            <span>{!!attr.label && attr.label}</span>
            <input
                className={`${attr.type}-field`}
                type={attr.type}
                name={attr.name}
                onBlur={e => inputField.onBlur(e)}
                onChange={e => inputField.onChange(e)}
                value={inputField.value}
                autoComplete={attr.autoComplete}
                placeholder={attr.placeholder}/>
            {!inputField.inputValid && <span className="error">{attr.error}</span>}
        </label>
    )
}

export default Input