import React, {useState, useEffect, useRef} from "react";
import data from "../../data/data"
import Post from "../Post/Post";
const Posts = () => {

    const posts = data.posts

    // let lastItemRef = useRef(null);
    // const rootRef = useRef(null);
    // const [listPosts, setListPosts] = useState([])
    // let observer: IntersectionObserver
    // console.log(listPosts)
    //
    // const loadDate = () => {
    //     const newDate = data[listPosts.length]
    //     setListPosts((prevListPosts) => [
    //         ...prevListPosts,
    //         newDate
    //     ])
    // }
    //
    // useEffect(() => {
    //     setListPosts(posts.slice(0,6))
    // }, [])
    //
    // useEffect(() => {
    //     if(rootRef.current && lastItemRef.current) {
    //         const interceptConfig = {
    //             root: rootRef.current,
    //             rootMargin: "0px",
    //             threshold: 0.1,
    //         };
    //
    //         observer = new IntersectionObserver((entries) => {
    //             if(entries.every((entry) => entry.isIntersecting)) {
    //                 loadDate()
    //             }
    //         }, interceptConfig)
    //
    //         observer.observe(lastItemRef.current)
    //         return () => {
    //             observer.disconnect()
    //         }
    //     }
    // }, [rootRef.current, lastItemRef.current])
    //
    // const referenceDataListIndex = listPosts.length - 2

    return (
        <div className="posts">
            {posts && posts.map((post, index) =>
                <Post
                    key={post._id}
                    post={post}
                />
            )}
        </div>
        // <div ref={rootRef} className="posts">
        //     {listPosts && listPosts.map((post, index) =>
        //         <div
        //             ref={index === referenceDataListIndex ? lastItemRef : null}
        //             key={post._id}
        //         >
        //             <Post
        //                 post={post}/>
        //         </div>
        //     )}
        // </div>
    )
}

export default Posts