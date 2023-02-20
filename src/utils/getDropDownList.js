import React from "react";

const getDropDownList = (initValue, maxVal, placeholder, digit, reverse) => {
    const options = []
    options.push(<option key={placeholder} value={placeholder}>{placeholder}</option>)

    for (let i = 1; i <= maxVal; i++) {
        options.push(<option key={reverse ? initValue - i : i} value={reverse ? initValue - i : i}>{
            (reverse ? initValue - i : i).toLocaleString('en-US', {
                minimumIntegerDigits: digit,
                useGrouping: false
            })
        }</option>)
    }

    return options
}

export default getDropDownList