import {Outlet} from "react-router";

import {Link} from "react-router-dom";


export const PostsComponent = () => {
    return(
        <>
            <ul>
                <li>
                    <li><Link to="jsonplaceholder">Posts - JSONPlaceholder</Link></li>
                    <li><Link to="dummyJson">Posts - DummyJson</Link></li>
                </li>
            </ul>
            <Outlet/>
        </>
    )
}