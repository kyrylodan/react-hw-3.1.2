import {Outlet} from "react-router";

import {Link} from "react-router-dom";


export const Comments = () => {
    return(
        <>
            <ul>
                <li>
                    <li><Link to="jsonplaceholder">Comments - JSONPlaceholder</Link></li>
                    <li><Link to="dummyJson">Comments - DummyJson</Link></li>
                </li>
            </ul>
            <Outlet/>
        </>
    )
}
