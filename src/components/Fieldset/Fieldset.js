import React from "react";
import "./Fieldset.scss"

const Fieldset = ({ children, ...props}) => {
    return (
        <fieldset >
            <legend className="fieldset-legend">{props.legend}</legend>
            { children }
            {!!props.error && <span className="error text-left text-red-600 mt-1 text-sm font-bold">Ваш вік не досяг 18 років</span>}
        </fieldset>
    )
}

export default Fieldset