import React, {useContext, useEffect} from "react";
import "./Fieldset.scss"
import {FormContext} from "../Form";

const Fieldset = ({ children, ...props}) => {
    const { setFieldsValid } = useContext(FormContext)

    useEffect(() => {
        setFieldsValid(prev => ({...prev, [props.id]: props.error}))

    }, [props.error])

    return (
        <fieldset >
            <legend className="fieldset-legend">{props.legend}</legend>
            { children }
            {(!props.error && props.error !== null)  && <span className="error">Ваш возраст не может быть меньше 16 лет</span>}
        </fieldset>
    )
}

export default Fieldset