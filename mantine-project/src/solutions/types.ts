import {Comment, Post} from "../resources/posts";

export interface SolutionProps {
    posts: Post[],
    postDetail?: Post,
    comments: Comment[],
    loadPost: (postId: Post['id']) => void,
    loadComments: (postId: Comment['id']) => void
}
