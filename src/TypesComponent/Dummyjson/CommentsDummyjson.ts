export interface User {
    id: number;
    username: string;
    fullName: string;
}

export interface CommentDummyjson {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

export interface CommentsResponse {
    comments: Comment[];
}
