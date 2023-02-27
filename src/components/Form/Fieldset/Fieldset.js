import React, {useContext, useEffect} from "react";
import "./Fieldset.scss"
import {FormContext} from "../../../context/FormContext";
import classNames from "classnames";

const Fieldset = ({ children, legend, id, dateOfBirth}) => {
    const {setFieldsValid} = useContext(FormContext)

    useEffect(() => {
        if(dateOfBirth.isUserAgeValid) {
            setFieldsValid(prev => ({...prev, [id]: dateOfBirth.isUserAgeValid}))
        } else {
            setFieldsValid(prev => ({
                ...prev,
                [id]: dateOfBirth.isUserAgeValid
            }))
        }
    }, [dateOfBirth.isUserAgeValid, dateOfBirth.userAgeValidError])

    return (
        <fieldset className={classNames({incorrect: !dateOfBirth.isUserAgeValid && dateOfBirth.isUserAgeValid !== null})}>
            <legend className="fieldset-legend">{legend}</legend>
            { children }
            {!dateOfBirth.isUserAgeValid && <span className="error">{dateOfBirth.userAgeValidError}</span>}
        </fieldset>
    )
}

export default Fieldset