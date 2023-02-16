import React from "react";

import style from "./HeadlineContainer.module.scss"
const HeadlineContainer = ({ children }) => {
    return (
        <div className="headline">
            { children }
        </div>
    )
}

export default HeadlineContainer