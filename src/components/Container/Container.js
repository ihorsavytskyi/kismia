import React from "react";
import "./Container.scss"
const getClasses = classes => classes.join(" ")

const Container = ({ children, classes }) => {
    return (
        <div className={`container ${getClasses(classes)}`}>
            { children }
        </div>
    )
}

export default Container