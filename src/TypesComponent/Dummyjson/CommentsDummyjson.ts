export interface UserDummyjson {
    id: number;
    username: string;
    fullName: string;
}

export interface CommentDummyjson {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: UserDummyjson;
}

export interface CommentsResponse {
    comments: Comment[];
}
