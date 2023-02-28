import React, {useEffect, useContext, useState} from "react";
import {FormContext} from "../../../context/FormContext";
import {useInput} from "../../../hooks/useInput";
import classNames from "classnames";
import "./InputPassword.scss"

const InputPassword = ({ attr }) => {

    const {setFieldsValue, setFieldsValid, validationRules} = useContext(FormContext)

    const inputField = useInput('', validationRules["password"])
    const [isVisiblePass, setVisiblePass] = useState(false)

    const toggleVisiblePass = () => {
        setVisiblePass(!isVisiblePass)
    }

    useEffect(() => {
        setFieldsValue(prev => ({
            ...prev,
            ["password"] : inputField.value
        }))

    }, [inputField.value])

    useEffect(() => {
        setFieldsValid(prev => ({
            ...prev,
            ["password"] : inputField.inputValid
        }))
    }, [inputField.inputValid])

    return (
        <div className="input-password">
            <label>
                <span>{!!attr.label && attr.label}</span>
                <input
                    className={
                        classNames("input-field", {
                            correct: inputField.inputValid  && inputField.isDirty,
                            incorrect: !inputField.inputValid && inputField.isDirty
                        })}
                    type={isVisiblePass ? "text" : "password"}
                    id="password"
                    name="password"
                    onBlur={e => inputField.onBlur(e)}
                    onChange={e => inputField.onChange(e)}
                    value={inputField.value}
                    autoComplete="off"
                    placeholder={attr.placeholder}/>
                    <span
                        className={classNames("tip", {
                            hide: !isVisiblePass,
                            show: isVisiblePass
                        })}
                        onClick={toggleVisiblePass}>
                    </span>
                {(!inputField.inputValid && inputField.isDirty) && <span className="error">{inputField.inputError[0]}</span>}
            </label>
        </div>
    )
}

export default InputPassword