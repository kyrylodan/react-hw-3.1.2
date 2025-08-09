import { useEffect, useState } from "react";
import type {PostType} from "../../TypesComponent/TypeJson/PostsType.ts";

export const PostsJsonplaceholder = () => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data: PostType[]) => setPosts(data));
    }, []);

    return (
        <>
            {posts.map((posts) => (
                <div key={posts.id}>

                    <p>{posts.userId}</p>
                    <p>{posts.title}</p>
                    <p>{posts.body}</p>
                </div>
            ))}
        </>
    );
};