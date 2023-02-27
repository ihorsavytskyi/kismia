import React, {useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {getOverWrittenString} from "../../utils/getOverWrittenString";
// import "./ReadMore.scss"


const ReadMore = ({ children }) => {

    const text = children
    const [isReadMore, setIsReadMore] = useState(true)

    const getShortText = (text) => {
        return text.slice(0, 267)
    }

    if(text.length < 267) {
        return (
            <p className="post-text">{getOverWrittenString(text)}</p>
        )
    } else {
        return (
            <SwitchTransition mode={"out-in"}>
                <CSSTransition
                    key={isReadMore}
                    timeout={0}
                    className="post-text">
                        <p className="post-text">
                            {isReadMore ?
                                getOverWrittenString((getShortText(text).concat("..."))) :
                                getOverWrittenString(text)
                            }
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