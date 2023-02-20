import React from "react";
import "./Post.scss"

import {getSplitString} from "../../utils/getSplitString";
import {getDate} from "../../utils/getDate";

const usePostText = () => {


    return {

    }
}


const Post = ({ post }) => {

    const postText = usePostText(post.postText)

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
                <p className="post-text">{getShortPostText(post.postText)}</p>
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

const getShortPostText = (text) => {
    console.log(text.length)
    if(text.length > 267) {
        return text.slice(0, 275).concat("...")
    }

    return text
}

export default Post