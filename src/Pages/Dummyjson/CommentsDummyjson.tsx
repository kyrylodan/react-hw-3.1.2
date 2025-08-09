import { useEffect, useState } from "react";
import type { CommentDummyjson } from "../../TypesComponent/Dummyjson/CommentsDummyjson.ts";

export const CommentDummyJson = () => {
    const [comment, setComment] = useState<CommentDummyjson[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then(response => response.json())
            .then(data => setComment(data.comments)) // <- Ось тут!
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            {comment.map(comment => (
                <div key={comment.id}>
                    <p> {comment.id}</p>
                    <p> {comment.body}</p>
                    <p> {comment.postId}</p>
                    <p> {comment.likes}</p>
                    <p> {comment.user.fullName} (@{comment.user.username})</p>
                </div>
            ))}
        </>
    );
};

