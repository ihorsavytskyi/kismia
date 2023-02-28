import React, {createContext, useEffect, useState} from "react";

import useForm from "../hooks/useForm";
import {useSessionStorage} from "../hooks/useSessionStorage";

import data from "../data/data";
export const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const [storageValues, setStorageValues] = useSessionStorage({
        name: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        password: '',
        email: '',
        consent: null
    }, "SESSION_USER_REGISTRATION_DATE")
    const [fieldsValue, setFieldsValue] = useState(() => (storageValues))

    const [isFieldsValid, setFieldsValid] = useState(() => ({
        dateOfBirth: null
    }))

    const [validationRules, setValidationRules] = useState({})
    const isFormValid = useForm(isFieldsValid)

    useEffect(() => {
        setValidationRules(data.validationRules)
    }, [])

    return (
        <FormContext.Provider
            value={{isFormValid, fieldsValue, setFieldsValue, isFieldsValid, setFieldsValid, validationRules, storageValues, setStorageValues}}>
            { children }
        </FormContext.Provider>
    )
}