import { useEffect, useState } from "react";
import type {User} from "../../TypesComponent/TypeJson/UserType.ts";
import {Outlet} from "react-router";


export const UsersJsonplaceholder = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data: User[]) => setUsers(data));
    }, []);

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.address.city}</p>
                </div>
            ))}
            <Outlet/>
        </>
    );
};