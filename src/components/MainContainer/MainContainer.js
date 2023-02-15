import React from "react";
import "./MainContainer.scss.css"
const MainContainer = ({ children, ...props }) => {
    return (
        <div className="main" {...props}>
            { children }
        </div>
    )
}

export default MainContainer