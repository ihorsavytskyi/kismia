import React, {useContext, useEffect} from "react";
import "./Fieldset.scss"
import {FormContext} from "../Form";

const Fieldset = ({ children, ...props}) => {
    const { setFieldsValid } = useContext(FormContext)

    useEffect(() => {
        const userAgeIsValid = props.error === ""

        setFieldsValid(prev => ({...prev, [props.id]: userAgeIsValid}))

    }, [props.error])

    return (
        <fieldset >
            <legend className="fieldset-legend">{props.legend}</legend>
            { children }
            {props.error !==""  && <span className="error">{props.error}</span>}
        </fieldset>
    )
}

export default Fieldset