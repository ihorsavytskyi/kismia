import React, {useContext, useEffect} from "react";
import "./Fieldset.scss"
import {FormContext} from "../Form";

const Fieldset = ({ children, legend, error, id}) => {
    const { setFieldsValid } = useContext(FormContext)

    useEffect(() => {
        setFieldsValid(prev => ({...prev, [id]: error}))

    }, [error])

    return (
        <fieldset >
            <legend className="fieldset-legend">{legend}</legend>
            { children }
            {(!error && error !== null)  && <span className="error">{error}</span>}
        </fieldset>
    )
}

export default Fieldset