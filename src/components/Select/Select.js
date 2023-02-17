import React, {useContext, useEffect} from "react";
import {useInput} from "../../hooks/useInput";
import {FormContext} from "../../pages/Registration/Registration";
import "./Select.scss"

const Select = ({ attr }) => {

    const { setFieldsValue } = useContext(FormContext)

    const selectField = useInput('', {
        isEmpty: true
    })

    useEffect(() => {
        setFieldsValue(prev => (
            {
                ...prev,
                [attr.name]: selectField.value
            }
        ))
    }, [selectField.value])

    return (
        <label className="select-label">
            <select
                className="select-field"
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