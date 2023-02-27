import React, {useEffect, useContext, useState} from "react";
import "./InputText.scss"
import {useInput} from "../../../hooks/useInput";
import classNames from "classnames";
import {FormContext} from "../../../context/FormContext";

const InputText = ({ attr }) => {

    const {setFieldsValue, setFieldsValid, validationRules} = useContext(FormContext)
    const [isVisiblePass, setVisiblePass] = useState(false)

    const inputField = useInput('', validationRules[attr.name])

    const toggleVisiblePass = () => {
        setVisiblePass(!isVisiblePass)
    }

    useEffect(() => {
        setFieldsValue(prev => ({
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
                    type={isVisiblePass ? "text" : attr.type}
                    id={attr.name}
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
    )
}

export default InputText