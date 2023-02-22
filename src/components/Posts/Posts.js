import React from "react";
import data from "../../data/data"
import Post from "../Post/Post";
import Loader from "../Loader/Loader";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const Posts = () => {

    const posts = data.posts
    const [listPosts, isLoading] = useInfiniteScroll(posts)

    return (
        <div className="posts">
            <TransitionGroup className="post" component={null}>
                {listPosts && listPosts.map((post, index) =>
                    <CSSTransition
                        key={post._id}
                        timeout={100}
                        classNames={{
                            enter: 'init',
                            enterActive: 'loaded'
                        }}>
                        <Post
                            key={post._id}
                            post={post}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
            {!!isLoading && <Loader/>}
        </div>
    )
}

export default Posts