import React from "react";


const Section = ({ children, ...props }) => {
    return (
        <section className={props.alignment}>
            { children }
        </section>
    )
}

export default Section