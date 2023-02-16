import React from "react";

const Fieldset = ({ children, ...props}) => {
    return (
        <fieldset >
            <legend className="fieldset-legend">{props.legend}</legend>
            { children }
            {!!props.error && <span className="error text-left text-red-600 mt-1 text-sm font-bold">Ваш возраст не достиг 18 лет</span>}
        </fieldset>
    )
}

export default Fieldset