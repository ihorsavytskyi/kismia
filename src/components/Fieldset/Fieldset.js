import React, {useContext, useEffect} from "react";
import "./Fieldset.scss"
import {FormContext} from "../../pages/Registration/Registration";

const Fieldset = ({ children, ...props}) => {
    const { isFieldsValid, setFieldsValid } = useContext(FormContext)

    return (
        <fieldset >
            <legend className="fieldset-legend">{props.legend}</legend>
            { children }
            {!!props.error && <span className="error text-left text-red-600 mt-1 text-sm font-bold">Ваш вік не досяг 18 років</span>}
        </fieldset>
    )
}

export default Fieldset