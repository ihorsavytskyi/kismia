import React, { useState, useEffect } from "react";
import "./Input.scss"
import { useInput } from "../../hooks/useInput";

const Input = ({ attr }) => {

    const inputField = useInput('', {
        isEmpty: true,
        minlength: 2,
        maxLength: 80,
        pattern: '^[a-zA-Z ]*$'
    })

    console.log(inputField)

    console.log(attr.name)

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
            {!!attr.error && <span className="error">{attr.error}</span>}
        </label>
    )
}

export default Input