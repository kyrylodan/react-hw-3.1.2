import { useEffect, useState } from "react";
import type { PostDummyjson } from "../../TypesComponent/Dummyjson/PostsDummyjson.ts";

export const PostsDummyJson = () => {
    const [posts, setPosts] = useState<PostDummyjson[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Для дебагу
                setPosts(data.posts); // <- Витягуємо саме масив posts
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.tags.join(", ")}</p> {/* Якщо tags - масив */}
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    );
};
