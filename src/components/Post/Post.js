import React from "react";
import "./Post.scss"

import {getSplitString} from "../../utils/getSplitString";
import {getDate} from "../../utils/getDate";

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
                <p className="post-text">{post.postText}</p>
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

export default Post