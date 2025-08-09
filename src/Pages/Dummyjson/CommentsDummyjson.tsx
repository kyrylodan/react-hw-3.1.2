import { useEffect, useState } from "react";


import type {CommentDummyjson} from "../../TypesComponent/Dummyjson/CommentsDummyjson.ts";

export const CommentDummyJson = () => {
    const [comment, setComment] = useState<CommentDummyjson[]>([]);

    useEffect(() => {
        fetch(' https://dummyjson.com/posts')
            .then((response) => response.json())
            .then((data: CommentDummyjson[]) => setComment(data));
    }, []);

    return (
        <>
            {comment.map((comment) => (
                <div key={comment.id}>
                    <p>Comment ID: {comment.id}</p>
                    <p>Body: {comment.body}</p>
                    <p>Post ID: {comment.postId}</p>
                    <p>Likes: {comment.likes}</p>
                    <p>User: {comment.user.fullName} (@{comment.user.username})</p>
                </div>
            ))}
        </>
    );
};
