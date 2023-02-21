import React, {useState} from "react";
import classNames from "classnames";

const ReadMore = ({ children }) => {

    const text = children
    const [isReadMore, setIsReadMore] = useState(true)

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore)
    }

    if(text.length < 267) {
        return (
            <p className="post-text">{text}</p>
        )
    } else {
        return (
            <p className={classNames("post-text", {collapsed: isReadMore})}>
                {isReadMore ?  text.slice(0, 267).concat("...") : text}
                <span onClick={toggleReadMore} className="read-more-toggle">
                    {isReadMore ? "Читать полностью" : "Свернуть"}
                </span>
            </p>
        )
    }
}

export default ReadMore