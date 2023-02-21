import React from "react";
import data from "../../data/data"
import Post from "../Post/Post";
import Loader from "../Loader/Loader";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const Posts = () => {

    const posts = data.posts
    const [listPosts, isLoading] = useInfiniteScroll(posts)

    return (
        <div className="posts">
            {listPosts && listPosts.map((post, index) =>
                <Post
                    key={post._id}
                    post={post}
                />
            )}
            {!!isLoading && <Loader/>}
        </div>
    )
}

export default Posts