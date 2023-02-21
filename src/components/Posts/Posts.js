import React, {useState, useEffect, useRef} from "react";
import data from "../../data/data"
import Post from "../Post/Post";

const Posts = () => {

    const posts = data.posts

    const [listPosts, setListPosts] = useState(posts.slice(0,3))
    const [fetching, setFetching] = useState(false);
    const [lastPost, setLastPost] = useState(listPosts.length)
    const totalPostsLength = posts.length

    useEffect(() => {
        if(fetching && lastPost < totalPostsLength) {
            const newListItem = posts[lastPost]
            const newListPosts = [...listPosts, newListItem]

            setTimeout(() => {
                setListPosts(newListPosts)
                setLastPost(prev => (prev + 1))
                setFetching(false)
            }, 200)
        }
    }, [fetching])

    useEffect(() => {
        const scrollHandler = (e) => {
            if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 250) {
                setFetching(true)
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <div className="posts">
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