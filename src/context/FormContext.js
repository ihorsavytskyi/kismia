import React, {createContext, useEffect, useState} from "react";
import useForm from "../hooks/useForm";
import data from "../data/data";
export const FormContext = createContext({})

export const FormProvider = ({ children }) => {

    const [fieldsValue, setFieldsValue] = useState(() => ({
        name: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        password: '',
        email: '',
        consent: null
    }))
    const [isFieldsValid, setFieldsValid] = useState(() => ({
        name: '',
        dayOfBirth: '',
        monthOfBirth: '',
        yearOfBirth: '',
        dateOfBirth: null,
        password: '',
        email: ''
    }))
    const [validationRules, setValidationRules] = useState({})
    const isFormValid = useForm(isFieldsValid)

    const [fieldsRef, setFieldsRef] = useState({})

    useEffect(() => {
        setValidationRules(data.validationRules)
    }, [])

    return (
        <FormContext.Provider
            value={{isFormValid, fieldsValue, setFieldsValue, isFieldsValid, setFieldsValid, validationRules, setFieldsRef, fieldsRef}}>
            { children }
        </FormContext.Provider>
    )
}