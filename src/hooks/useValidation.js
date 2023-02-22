import { useState, useEffect } from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isMatchesRegExp, setMatchesRegExpError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    const [inputError, setInputError] = useState([])

    useEffect(() => {

        const fieldsError = []

        const interval = setTimeout(() => {

            for (const validation in validations) {
                switch(validation) {
                    case 'isEmpty':
                        if(value) {
                            setEmpty(false)
                        } else {
                            setEmpty(true)
                            fieldsError.push("Поле не может быть пустым")
                        }
                        break;
                    case 'minLength':
                        if(value.length < validations[validation]) {
                            setMinLengthError(true)
                            fieldsError.push(`Указанное значение не может быть меньше ${validations[validation]} символов`)
                        } else {
                            setMinLengthError(false)
                        }
                        break;
                    case 'maxLength':
                        if(value.length > validations[validation]) {
                            setMaxLengthError(true)
                            fieldsError.push(`Поле не должно содержать более ${validations[validation]} символов`)
                        } else {
                            setMaxLengthError(false)
                        }
                        break;
                    case 'pattern':
                        let regExp = new RegExp(validations[validation])
                        if(value.match(regExp) == null) {
                            setMatchesRegExpError(true)
                            fieldsError.push("Введенное значение содержит недопустимые символы")
                        } else {
                            setMatchesRegExpError(false)
                        }
                        break;
                    default:
                        break;
                }
            }

        }, 700)

        return () => {
            clearTimeout(interval)
        }

        setInputError(fieldsError)

    }, [value, validations])

    useEffect(() => {

        if(isEmpty || minLengthError || maxLengthError || isMatchesRegExp) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError, isMatchesRegExp])


    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        isMatchesRegExp,
        inputValid,
        inputError
    }
}