export interface Reactions {
    likes: number;
    dislikes: number;
}

export interface PostDummyjson {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}

export interface PostsResponse {
    posts: string[];
}
