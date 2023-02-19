import React from "react";
import "./HeadlineContainer.scss"
const HeadlineContainer = ({ children }) => {
    return (
        <div className="headline">
            { children }
        </div>
    )
}

export default HeadlineContainer