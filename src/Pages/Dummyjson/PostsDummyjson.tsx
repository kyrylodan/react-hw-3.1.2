import { useEffect, useState } from "react";

import type {PostDummyjson} from "../../TypesComponent/Dummyjson/PostsDummyjson.ts";

export const PostsDummyJson = () => {
    const [posts, setPosts] = useState<PostDummyjson[]>([]);

    useEffect(() => {
        fetch(' https://dummyjson.com/posts')
            .then((response) => response.json())
            .then((data: PostDummyjson[]) => setPosts(data));
    }, []);

    return (
        <>
            {posts.map((posts) => (
                <div key={posts.id}>

                    <p>{posts.tags}</p>
                    <p>{posts.title}</p>
                    <p>{posts.body}</p>
                </div>
            ))}
        </>
    );
};