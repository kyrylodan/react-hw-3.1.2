import App from "../App.tsx";
import {createBrowserRouter} from "react-router-dom";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import { Comments } from "../components/Comments.tsx";
import {UsersJsonplaceholder} from "../Pages/UsersJsonplaceholder/UsersJsonplaceholder.tsx";
import {PostsJsonplaceholder} from "../Pages/UsersJsonplaceholder/PostsJsonplaceholder.tsx";
import {CommentsJsonplaceholder} from "../Pages/UsersJsonplaceholder/CommentsJsonplaceholder.tsx";
import {PostsDummyJson} from "../Pages/Dummyjson/PostsDummyjson.tsx";
import {UsersDummyJson} from "../Pages/Dummyjson/UsersDummyjson.tsx";
import {CommentDummyJson} from "../Pages/Dummyjson/CommentsDummyjson.tsx";

export const routes = createBrowserRouter ([
    {
        path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersComponent/>, children: [
                {path: 'JsonPlaceholder', element: <UsersJsonplaceholder/>}
                ]},


            {path: 'users', element: <UsersComponent/>, children: [
                    {path: 'DummyJson', element: <UsersDummyJson/>}
                ]},


            {path: 'posts', element: <PostsComponent/>,children: [
                    {path: 'JsonPlaceholder', element: <PostsJsonplaceholder/>}
                ]},

            {path: 'posts', element: <PostsComponent/>,children: [
                {path: 'DummyJson', element: <PostsDummyJson/>}
                ]},

            {path: 'comments', element: <Comments/>,children: [
                    {path: 'JsonPlaceholder', element: <CommentsJsonplaceholder/>}
                ]},
            {path: 'comments', element: <Comments/>,children: [
                    {path: 'DummyJson', element: <CommentDummyJson/>}
                ]}



        ]
    }
]);