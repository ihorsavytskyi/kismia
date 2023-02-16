import React from "react";
import "./Section.scss"

const Section = ({ children, ...props }) => {
    return (
        <section className={props.alignment}>
            { children }
        </section>
    )
}

export default Section