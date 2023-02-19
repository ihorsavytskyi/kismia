import React, {useEffect, useContext} from "react";
import "./Input.scss"
import { useInput } from "../../hooks/useInput";
import classNames from "classnames";
import data from "../../data/data"

import {FormContext} from "../../pages/Registration/Registration";
const Input = ({ attr }) => {

    const { setFieldsValue } = useContext(FormContext)
    const validationRules = data.validationRules

    // const inputField = useInput('', {
    //     isEmpty: true,
    //     minLength: 2,
    //     maxLength: 80,
    //     pattern: '^[a-zA-Z ]*$'
    // })

    const inputField = useInput('', validationRules[attr.name])

    useEffect(() => {
        setFieldsValue(prev => (
            {
                ...prev,
                [attr.name]: inputField.value
            }
        ))

    }, [inputField.value])

    return (
        <>
            {attr.type === "checkbox" && (
                <div className="checkbox-item">
                    <label>
                        <input
                            className="icon-checkbox"
                            type={attr.type}
                            name={attr.name}
                            onBlur={e => inputField.onBlur(e)}
                            onChange={e => inputField.onChange(e)}
                            value={inputField.value}/>
                        <span>{!!attr.label && attr.label}</span>
                    </label>
                </div>
            )}
            {attr.type !== "checkbox" && (
                <div className="input-text">
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
                </div>
            )}
        </>
    )
}

export default Input