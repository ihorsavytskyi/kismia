import React, {useState, useEffect, useRef} from "react";
import data from "../../data/data"
import Post from "../Post/Post";
import post from "../Post/Post";

const Posts = () => {

    const posts = data.posts

    const [listPosts, setListPosts] = useState(posts.slice(0,3))
    // const [counter, setCounter] = useState(listPosts.length)

    let observer: IntersectionObserver

    let postContainerRef = useRef(null);
    const [isVisible, setVisible] = useState(null)

    // const cb = (entries) => {
    //     const [entry] = entries
    //     console.log(entry.isIntersecting)
    //
    //     if(entry.isIntersecting) {
    //         if(counter <=  posts.length) {
    //             const newItem = []
    //             const newListPosts = [...listPosts, ...newItem]
    //             setListPosts(newListPosts)
    //             setCounter(prev => prev + 1)
    //
    //         }
    //     }
    //     // console.log("entry.isIntersecting", entry.isIntersecting)
    //
    //
    //     // setListPosts(prev => ([
    //     //     ...prev,
    //     //     posts[counter]
    //     // ]))
    // }
    //
    // const interceptConfig = {
    //     root: null,
    //     rootMargin: "0px",
    //     threshold: 0.9,
    // };
    //
    // useEffect(() => {
    //     const observer = new IntersectionObserver(cb, interceptConfig)
    //
    //     if(postContainerRef.current) observer.observe(postContainerRef.current)
    //
    //     return () => {
    //         if(postContainerRef.current) observer.unobserve(postContainerRef.current)
    //     }
    // }, [postContainerRef, interceptConfig, listPosts])

    // const loadMore = () => {
    //     console.log("load")
    //     while(listPosts.length <= posts.length) {
    //         const newDate = posts.slice(listPosts[listPosts.length - 1], 1)
    //         setListPosts((prevListPosts) => [
    //             ...prevListPosts,
    //             newDate
    //         ])
    //     }
    // }

    // useEffect(() => {
    //     console.log(postContainer.current)
    //
    //     if(postContainer.current) {
    //         const interceptConfig = {
    //             root: null,
    //             rootMargin: "0px",
    //             threshold: 1,
    //         };
    //
    //         console.log(interceptConfig.root)
    //
    //         observer = new IntersectionObserver((entries) => {
    //             console.log(entries)
    //
    //             if(entries.every((entry) => entry.isIntersecting)) {
    //                 console.log("load")
    //
    //                 // if(counter <= posts.length) {
    //                 //     const newDate = posts.slice(counter - 1, 1)
    //                 //     console.log("newDate: ", posts.slice(counter - 1, 1))
    //                 //     setCounter(prev => prev + 1)
    //                 //     console.log(counter)
    //                 //
    //                 //     const newListPosts = [...listPosts, ...newDate]
    //                 //     console.log(newDate)
    //                 // //     setListPosts(newListPosts)
    //                 // }
    //             }
    //         }, interceptConfig)
    //
    //         observer.observe(postContainer.current)
    //         return () => {
    //             observer.disconnect()
    //         }
    //     }
    // }, [postContainer.current])

    return (
        <div className="posts" ref={postContainerRef}>
            {listPosts && listPosts.map((post, index) =>
                <Post
                    key={post._id}
                    post={post}
                />
            )}
        </div>
    )
}

export default Posts