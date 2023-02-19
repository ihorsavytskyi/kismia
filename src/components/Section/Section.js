import React from "react";
import "./Section.scss"
import {getSplitString} from "../../utils/getSplitString";

const Section = ({ children, ...props }) => {

    return (
        <section className={!!props.classes && getSplitString(props.classes, " ")}>
            { children }
        </section>
    )
}

export default Section