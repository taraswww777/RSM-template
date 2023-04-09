import axios, {AxiosPromise} from "axios";

const URL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}
export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export const fetchPostList = () => {
    return axios.get<Post[]>(URL_POSTS)
        .then(({data}) => data);
}

export const fetchPostById = (postId: Post['id']) => {
    return axios.get<Post>(`${URL_POSTS}/${postId}`)
        .then(({data}) => data);

}
export const fetchPostCommentsList = (postId: Comment['id']) => {
    return axios.get<Comment[]>(`${URL_POSTS}/${postId}/comments`)
        .then(({data}) => data);
}
