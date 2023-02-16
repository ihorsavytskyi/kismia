import React from "react";
import data from "../../helpers/data"
import Post from "../Post/Post";
const Posts = () => {

    const posts = data.posts

    return (
        <div className="posts">
            {posts && posts.map(post =>
                <Post key={post._id} post={post}/>
            )}
        </div>
    )
}

export default Posts