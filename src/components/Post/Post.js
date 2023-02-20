import React, {useState} from "react";
import {getSplitString} from "../../utils/getSplitString";
import {getDate} from "../../utils/getDate";
import "./Post.scss"

const Post = ({ post }) => {


    return (
        <div className="post">
            <div className="post-header">
                <div className="users-avatars">
                    {getAuthorAvatars(post.authors)}
                </div>
                <div className="post-details">
                    <div className="users-names">
                        {getSplitString(post.authors.map(author => author.name), " и ")}
                    </div>
                    <div className="publish-date">
                        {getDate(post.publishDate)}
                    </div>
                </div>

            </div>
            <div className="post-body">
                <ReadMore>
                    {post.postText}
                </ReadMore>
            </div>
        </div>
    )
}

const getAuthorAvatars = (authors) => {
    return (
        <>
            {authors.map(author =>
                <img key={author.name} src={author.imgSrc} className="users-avatar-item" alt={author.name}/>
            )}
        </>
    )
}

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
            <p className="post-text">
                {isReadMore ?  text.slice(0, 267).concat("...") : text}
                <span onClick={toggleReadMore} className="read-more-toggle">
                    {isReadMore ? "Читать полностью" : "Свернуть"}
                </span>
            </p>
        )
    }
}

export default Post