import React, {useRef, useState} from "react";
import classNames from "classnames";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import "./ReadMore.scss"

const ReadMore = ({ children }) => {

    const text = children
    const [isReadMore, setIsReadMore] = useState(true)

    const ShortText = ({text}) => {
        return (
            <p className="post-text">
                {text.slice(0, 267).concat("...")}
            </p>
        )
    }
    const FullText = ({text}) => {
        return (
            <p className="post-text collapsed">
                {text}
            </p>
        )
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
                    className="fade">
                        <>
                            {!isReadMore ? <FullText text={text}/> : <ShortText text={text}/>}
                            <span onClick={() => setIsReadMore((isReadMore) => !isReadMore)} className="read-more-toggle">
                                {isReadMore ? "Читать полностью" : "Свернуть"}
                            </span>
                        </>
                </CSSTransition>
            </SwitchTransition>
        )
    }
}

export default ReadMore

// <p className={classNames("post-text", {collapsed: isReadMore})}>
//     {isReadMore ?  text.slice(0, 267).concat("...") : text}
//     <span onClick={toggleReadMore} className="read-more-toggle">
//         {isReadMore ? "Читать полностью" : "Свернуть"}
//     </span>
// </p>