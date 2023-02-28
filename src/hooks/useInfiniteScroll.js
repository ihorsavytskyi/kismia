import {useState, useEffect} from "react";

const useInfiniteScroll = (data) => {

    const [listPosts, setListPosts] = useState(data.slice(0,3))
    const [fetching, setFetching] = useState(false);
    const [lastPost, setLastPost] = useState(listPosts.length)
    const totalPostsLength = data.length
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if(fetching && lastPost < totalPostsLength) {
            const newListItem = data[lastPost]
            const newListPosts = [...listPosts, newListItem]
            setLoading(true)

            setTimeout(() => {
                setListPosts(newListPosts)
                setLastPost(prev => (prev + 1))
                setFetching(false)
                setLoading(false)
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

    return [listPosts, isLoading]
}

export default useInfiniteScroll