import React from "react";

const MainContainer = ({ children, ...props }) => {
    return (
        <div className="main" {...props}>
            { children }
        </div>
    )
}

export default MainContainer