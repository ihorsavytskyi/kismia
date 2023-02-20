import React, {useContext, useEffect} from "react";
import {useInput} from "../../../hooks/useInput";
import {FormContext} from "../../../pages/Registration/Registration";
import "./Select.scss"
import data from "../../../data/data";
import classNames from "classnames";


const Select = ({ attr }) => {

    const { isFieldsValid, setFieldsValue, setFieldsValid } = useContext(FormContext)
    const validationRules = data.validationRules

    const selectField = useInput('', validationRules[attr.name])

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

    return (
        <label className="select-label">
            <select
                className={
                    classNames("select-field", {
                        correct: selectField.inputValid && selectField.isDirty && isFieldsValid.dateOfBirth,
                        incorrect: (!selectField.inputValid && selectField.isDirty) || (!isFieldsValid.dateOfBirth)
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