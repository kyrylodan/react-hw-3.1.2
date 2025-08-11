
import App from "../App.tsx";
import {createBrowserRouter} from "react-router-dom";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import {Comments} from "../components/Comments.tsx";

import {UsersJsonplaceholder} from "../Pages/UsersJsonplaceholder/UsersJsonplaceholder.tsx";
import {PostsJsonplaceholder} from "../Pages/UsersJsonplaceholder/PostsJsonplaceholder.tsx";
import {CommentsJsonplaceholder} from "../Pages/UsersJsonplaceholder/CommentsJsonplaceholder.tsx";

import {PostsDummyJson} from "../Pages/Dummyjson/PostsDummyjson.tsx";
import {UsersDummyJson} from "../Pages/Dummyjson/UsersDummyjson.tsx";
import {CommentDummyJson} from "../Pages/Dummyjson/CommentsDummyjson.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'users',
                element: <UsersComponent/>,
                children: [
                    {path: 'jsonplaceholder', element: <UsersJsonplaceholder/>},
                    {path: 'dummyjson', element: <UsersDummyJson/>}
                ]
            },
            {
                path: 'posts',
                element: <PostsComponent/>,
                children: [
                    {path: 'jsonplaceholder', element: <PostsJsonplaceholder/>},
                    {path: 'dummyjson', element: <PostsDummyJson/>}
                ]
            },
            {
                path: 'comments',
                element: <Comments/>,
                children: [
                    {path: 'jsonplaceholder', element: <CommentsJsonplaceholder/>},
                    {path: 'dummyjson', element: <CommentDummyJson/>}
                ]
            }
        ]
    }
]);
