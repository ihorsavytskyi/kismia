import React, {useEffect, useContext} from "react";
import "./Checkbox.scss"
import { useInput } from "../../../hooks/useInput";
import parse from "html-react-parser"
import {FormContext} from "../../../context/FormContext";

const Checkbox = ({ attr }) => {

    const {setFieldsValue, setFieldsValid, validationRules} = useContext(FormContext)
    const inputField = useInput('', validationRules[attr.name])

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
        <div className="checkbox-item">
            <label>
                <input
                    className="icon-checkbox"
                    type={attr.type}
                    name={attr.name}
                    onChange={e => inputField.onChange(e)}
                    value={inputField.value}/>
                <div className="checkbox-description">{!!attr.label && parse(attr.label)}</div>
            </label>
        </div>
    )
}

export default Checkbox