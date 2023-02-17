import React, {useEffect, useContext} from "react";
import "./Input.scss"
import { useInput } from "../../hooks/useInput";
import classNames from "classnames";

import {FormContext} from "../../pages/Registration/Registration";
const Input = ({ attr }) => {

    const { setFieldsValue } = useContext(FormContext)

    const inputField = useInput('', {
        isEmpty: true,
        minLength: 2,
        maxLength: 80,
        pattern: '^[a-zA-Z ]*$'
    })

    useEffect(() => {
        setFieldsValue(prev => (
            {
                ...prev,
                [attr.name]: inputField.value
            }
        ))

    }, [inputField.value])

    return (
        <label>
            <span>{!!attr.label && attr.label}</span>
            <input
                className={
                    classNames("input-field", {
                    correct: inputField.inputValid  && inputField.isDirty,
                    incorrect: !inputField.inputValid && inputField.isDirty
                })}
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