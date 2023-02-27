import React, {useContext, useEffect} from "react";
import {useInput} from "../../../hooks/useInput";
import "./Select.scss"
import classNames from "classnames";
import {FormContext} from "../../../context/FormContext";


const Select = ({ attr }) => {

    const {setFieldsValue, isFieldsValid, setFieldsValid, validationRules, storageValues, setStorageValues} = useContext(FormContext)
    const selectField = useInput(storageValues[attr.name], validationRules[attr.name])

    useEffect(() => {
        setFieldsValue(prev => ({
            ...prev,
            [attr.name]: selectField.value
        }))

        setStorageValues(prev => ({
            ...prev,
            [attr.name] : selectField.value
        }))
    }, [selectField.value])

    useEffect(() => {
        setFieldsValid(prev => ({
            ...prev,
            [attr.name] : selectField.inputValid
        }))
    }, [selectField.inputValid])

    return (
        <label className="select-label">
            <select
                className={
                    classNames("select-field", {
                        correct: selectField.inputValid && selectField.isDirty && isFieldsValid.dateOfBirth,
                        incorrect: (!selectField.inputValid && selectField.isDirty) || (!selectField.inputValid && selectField.isDirty && !isFieldsValid.dateOfBirth && isFieldsValid.dateOfBirth !== null)
                    })
                }
                id={attr.name}
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