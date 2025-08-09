import App from "../App.tsx";
import {createBrowserRouter} from "react-router-dom";
import {UsersComponent} from "../components/UsersComponent.tsx";
import {Jsonplaceholder} from "../components/Users-Json-Component/Jsonplaceholder.tsx";
import {Dummyjson} from "../components/Users-Dummyjson-Component/Dummyjson.tsx";
import {PostsComponent} from "../components/PostsComponent.tsx";
import { Comments } from "../components/Comments.tsx";

export const routes = createBrowserRouter ([
    {
        path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersComponent/>, children: [
                {path: 'jsonplaceholder', element: <Jsonplaceholder/>}
                ]},


            {path: 'users', element: <UsersComponent/>, children: [
                    {path: 'dummyjson', element: <Dummyjson/>}
                ]},


            {path: 'posts', element: <PostsComponent/>,children: [
                    {path: 'jsonplaceholder', element: <Jsonplaceholder/>}
                ]},

            {path: 'posts', element: <PostsComponent/>,children: [
                {path: 'dummyjson', element: <Dummyjson/>}
                ]},

            {path: 'comments', element: <Comments/>,children: [
                    {path: 'jsonplaceholder', element: <Jsonplaceholder/>}
                ]}



        ]
    }
]);