import React, {useEffect, useState} from 'react';
import './App.css';
import {fetchPostById, fetchPostList, Post} from "./resources/posts";

function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [postDetail, setPostDetail] = useState<Post>()

    useEffect(() => {
        fetchPostList().then(setPosts)
    }, []);

    const loadPost = (postId: Post['id']) => {
        fetchPostById(postId).then(setPostDetail)
    }

    return (
        <div>
            <ol>
                {posts.map(({id, title}) => (
                    <li key={id} onClick={() => loadPost(id)}>{title}</li>
                ))}
            </ol>
            <div>
                {postDetail?.body}
            </div>
        </div>
    );
}

export default App;
