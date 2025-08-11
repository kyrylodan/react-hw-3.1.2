import { useEffect, useState } from "react";
import type {DummyJsonUser} from "../../TypesComponent/Dummyjson/UsersDummyjson.ts";
import {Outlet} from "react-router";


export const UsersDummyJson = () => {
    const [users, setUsers] = useState<DummyJsonUser[]>([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data.users)); // <-- важливо
    }, []);

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.firstName} {user.lastName}</h3>
                    <p>{user.email}</p>
                    <p>{user.address.city}</p>
                </div>
            ))}
            <Outlet/>
        </>
    );
};
