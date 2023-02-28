import React, {useEffect, useContext, useState} from "react";
import {FormContext} from "../../../context/FormContext";
import {useInput} from "../../../hooks/useInput";
import classNames from "classnames";
import "./InputText.scss"

const InputText = ({ attr }) => {

    const {setFieldsValue, setFieldsValid, validationRules, storageValues, setStorageValues} = useContext(FormContext)

    const inputField = useInput(storageValues[attr.name], validationRules[attr.name])

    useEffect(() => {
        setFieldsValue(prev => ({
            ...prev,
            [attr.name] : inputField.value
        }))

        setStorageValues(prev => ({
           ...prev,
           [attr.name] : inputField.value
        }))

    }, [inputField.value])

    useEffect(() => {
        setFieldsValid(prev => ({
            ...prev,
            [attr.name] : inputField.inputValid
        }))
    }, [inputField.inputValid])

    return (
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
                    id={attr.name}
                    name={attr.name}
                    onBlur={e => inputField.onBlur(e)}
                    onChange={e => inputField.onChange(e)}
                    value={inputField.value}
                    placeholder={attr.placeholder}/>
                    {(!inputField.inputValid && inputField.isDirty) && <span className="error">{inputField.inputError[0]}</span>}
            </label>
        </div>
    )
}

export default InputText