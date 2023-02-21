import React, {useContext, useEffect} from "react";
import "./Fieldset.scss"
import {FormContext} from "../Form";

const Fieldset = ({ children, legend, error, id}) => {
    const { isFieldsValid, setFieldsValid } = useContext(FormContext)

    useEffect(() => {
        setFieldsValid(prev => ({...prev, [id]: error}))

    }, [error])

    return (
        <fieldset >
            <legend className="fieldset-legend">{legend}</legend>
            { children }
            {(!error && error !== null)  && <span className="error">Ваш вік не досяг 18 років</span>}
        </fieldset>
    )
}

export default Fieldset