import React, {useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import "./ReadMore.scss"

const ReadMore = ({ children }) => {

    const text = children
    const [isReadMore, setIsReadMore] = useState(true)

    const getShortText = (text) => {
        return text.slice(0, 267)
    }

    if(text.length < 267) {
        return (
            <p className="post-text">{text}</p>
        )
    } else {
        return (
            <SwitchTransition mode={"out-in"}>
                <CSSTransition
                    key={isReadMore}
                    timeout={500}
                    className="post-text">
                        <p className="post-text">
                            {isReadMore ? getShortText(text).concat("...") : getShortText(text).concat(text.slice(267))}
                            <span onClick={() => setIsReadMore((isReadMore) => !isReadMore)} className="read-more-toggle">
                                {isReadMore ? "Читать полностью" : "Свернуть"}
                            </span>
                        </p>
                </CSSTransition>
            </SwitchTransition>
        )
    }
}

export default ReadMore