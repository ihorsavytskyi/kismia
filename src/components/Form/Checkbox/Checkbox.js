import React, {useEffect, useContext, useState} from "react";
import "./Checkbox.scss"
import { useInput } from "../../../hooks/useInput";
import classNames from "classnames";
import {FormContext} from "../../../context/FormContext";

const Checkbox = ({ attr }) => {

    const {setFieldsValue, setFieldsValid, validationRules} = useContext(FormContext)
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
    )
}

export default Checkbox