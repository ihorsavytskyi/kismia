import React from "react";
// import styles from "./Post.module.scss"
import "./Post.scss"
const Post = ({ post }) => {

    return (
        <div className="post" style={{marginBottom: '1rem'}}>
            <div className="post-header">
                <div className="users-avatars">
                    {post.authors.map(author =>
                        <img key={author.name} src={author.imgSrc} className="users-avatar-item" alt="User avatar"/>
                    )}
                </div>
                <div className="post-details">
                    <div className="users-names">User names</div>
                    <div className="publish-date">{post.publishDate}</div>
                </div>

            </div>
            <div className="post-body">
                <p className="post-text">{post.postText}</p>
            </div>
        </div>
    )
}

export default Post