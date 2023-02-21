import React, {useEffect, useContext, useState} from "react";
import "./Input.scss"
import { useInput } from "../../../hooks/useInput";
import classNames from "classnames";
import data from "../../../data/data"
import {FormContext} from "../Form";

const Input = ({ attr }) => {

    const { setFieldsValue, setFieldsValid } = useContext(FormContext)
    const validationRules = data.validationRules
    const [isVisiblePass, setVisiblePass] = useState(false)

    const inputField = useInput('', validationRules[attr.name])

    const toggleVisiblePass = () => {
        setVisiblePass(!isVisiblePass)
    }

    useEffect(() => {
        setFieldsValue(prev => (
            {
                ...prev,
                [attr.name] : inputField.value
            }
        ))

    }, [inputField.value])

    useEffect(() => {
        setFieldsValid(prev => (
            {
                ...prev,
                [attr.name] : inputField.inputValid
            }
        ))

    }, [inputField.inputValid])

    return (
        <>
            {attr.type === "checkbox" && (
                <div className="checkbox-item">
                    <label>
                        <input
                            className="icon-checkbox"
                            type={attr.type}
                            name={attr.name}
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
                            type={isVisiblePass ? "text" : attr.type}
                            name={attr.name}
                            onBlur={e => inputField.onBlur(e)}
                            onChange={e => inputField.onChange(e)}
                            value={inputField.value}
                            autoComplete={attr.autoComplete}
                            placeholder={attr.placeholder}/>
                        {attr.type === "password" &&
                            <span
                                className={classNames("tip", {
                                    hide: !isVisiblePass,
                                    show: isVisiblePass
                                })}
                                onClick={toggleVisiblePass}>
                            </span>}
                        {(!inputField.inputValid && inputField.isDirty) && <span className="error">{inputField.inputError[0]}</span>}
                    </label>
                </div>
            )}
        </>
    )
}

export default Input