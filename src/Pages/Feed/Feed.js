import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox/TweetBox';
import Posts from './Posts/Posts';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/post`)
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [posts])
    
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {
                posts.map(p =><Posts key = {p._id} p={p} />)
            }
        </div>

    );
};

export default Feed;