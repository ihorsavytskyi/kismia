import React from "react";
import "./Input.scss"
const Input = ({ attr }) => {

    console.log(attr)

    return (
        <label>
            <span>{!!attr.label && attr.label}</span>
            <input
                className={attr.type}
                type={attr.type}
                name={attr.name}
                // onBlur={e => name.onBlur(e)}
                // onChange={e => name.onChange(e)}
                value={[attr.name].value}
                placeholder={attr.placeholder}/>
            <span className="tip"></span>
            <span className="error"></span>
        </label>
    )
}

export default Input