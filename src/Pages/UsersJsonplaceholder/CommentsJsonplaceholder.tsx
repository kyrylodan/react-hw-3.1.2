import { useEffect, useState } from "react";
import type {CommentType} from "../../TypesComponent/TypeJson/Comments.ts";

export const CommentsJsonplaceholder = () => {
    const [comment, setComment] = useState<CommentType[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((data: CommentType[]) => setComment(data));
    }, []);

    return (
        <>
            {comment.map((comment) => (
                <div key={comment.id}>

                    <h4>{comment.name}</h4>
                    <p> {comment.email}</p>
                    <p> {comment.postId}</p>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    );
};