import React, { useState, useEffect } from "react";

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [isMatchesRegExp, setMatchesRegExpError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {

        for (const validation in validations) {
            switch(validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'pattern':
                    value.match(validations[validation]) == null ? setMatchesRegExpError(true) : setMatchesRegExpError(false)
                    break;
            }
        }

    }, [value])

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
        inputValid
    }
}