import React from "react";
import {getSplitString} from "../../utils/getSplitString";
import "./Section.scss"

const Section = ({ children, ...props }) => {

    return (
        <section className={!!props.classes && getSplitString(props.classes, " ")}>
            { children }
        </section>
    )
}

export default Section