import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Post from "../Post/Post";
import Loader from "../Loader/Loader";
import data from "../../data/data"

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