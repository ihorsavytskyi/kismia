import React, {useContext, useEffect, useRef} from "react";
import {useInput} from "../../../hooks/useInput";
import "./Select.scss"
import classNames from "classnames";
import {FormContext} from "../../../context/FormContext";


const Select = ({ attr }) => {

    const {setFieldsValue, isFieldsValid, setFieldsValid, validationRules, setFieldsRef, fieldsRef} = useContext(FormContext)
    const selectField = useInput('', validationRules[attr.name])
    const selectFieldRef = useRef(null)

    useEffect(() => {
        setFieldsValue(prev => (
            {
                ...prev,
                [attr.name]: selectField.value
            }
        ))
    }, [selectField.value])

    useEffect(() => {
        setFieldsValid(prev => (
            {
                ...prev,
                [attr.name] : selectField.inputValid
            }
        ))

    }, [selectField.inputValid])

    useEffect(() => {
        setFieldsRef((prev) => ({
            ...prev,
            [attr.name]: selectFieldRef.current
        }))
    }, [])

    return (
        <label className="select-label">
            <select
                ref={selectFieldRef}
                className={
                    classNames("select-field", {
                        // correct: selectField.inputValid && selectField.isDirty && isFieldsValid.dateOfBirth,
                        // incorrect: !selectField.inputValid && selectField.isDirty
                        correct: isFieldsValid[attr.name] && selectField.isDirty,
                        incorrect: !isFieldsValid[attr.name] && selectField.isDirty
                    })
                }
                name={attr.name}
                onBlur={e => selectField.onBlur(e)}
                onChange={e => selectField.onChange(e)}
                value={selectField.value}>
                {attr.options}
            </select>
        </label>
    )
}

export default Select