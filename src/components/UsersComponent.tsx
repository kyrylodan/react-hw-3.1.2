import {Outlet} from "react-router";

import {Link} from "react-router-dom";


export const UsersComponent = () => {
    return(
        <>
     <ul>
         <li>
             <li><Link to="jsonplaceholder">Users - JSONPlaceholder</Link></li>
             <li><Link to="dummyJson">Users - DummyJson</Link></li>
         </li>
     </ul>
    <Outlet/>
            </>
    )
}