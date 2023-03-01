import React, {useRef} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Post from "../Post/Post";
import Loader from "../Loader/Loader";
import data from "../../data/data"

const Posts = () => {

    const posts = data.posts
    let intersectionPointRef = useRef()
    const [listPosts, isLoading] = useInfiniteScroll(posts, intersectionPointRef)

    return (
        <div className="posts">
            <TransitionGroup className="post" component={null}>
                {listPosts && listPosts.map((post, index) =>
                    <CSSTransition
                        key={post._id}
                        timeout={0}
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
            <span ref={intersectionPointRef} className="intersection-breakpoint"></span>
            {!!isLoading && <Loader/>}
        </div>
    )
}

export default Posts