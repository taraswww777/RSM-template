import React, {useEffect, useState} from 'react';
import './App.css';
import {Comment, fetchPostById, fetchPostCommentsList, fetchPostList, Post} from "./resources/posts";
import {MantineSolution} from "./solutions/MantineSolution";

function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [postDetail, setPostDetail] = useState<Post>()
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        fetchPostList().then(setPosts)
    }, []);

    const loadPost = (postId: Post['id']) => {
        if (postId !== postDetail?.id) {
            setComments([]);
            fetchPostById(postId).then(setPostDetail)
        }
    }
    const loadComments = (postId: Comment['id']) => {
        if (postId !== postDetail?.id || comments.length === 0) {
            fetchPostCommentsList(postId).then(setComments)
        }
    }

    return (
        <div>
            <MantineSolution
                posts={posts}
                postDetail={postDetail}
                loadPost={loadPost}
                loadComments={loadComments}
                comments={comments}
            />
        </div>
    );
}

export default App;
