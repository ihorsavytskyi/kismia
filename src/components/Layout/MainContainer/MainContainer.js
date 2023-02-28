import React from "react";
import "./MainContainer.scss"
const MainContainer = ({ children, ...props }) => {

    return (
        <div
            className={`main ${props.pageName && props.pageName}`}>
            { children }
        </div>
    )
}

export default MainContainer