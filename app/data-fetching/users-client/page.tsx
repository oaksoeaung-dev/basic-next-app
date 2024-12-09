"use client";
import {useEffect, useState} from "react";
import Loading from "@/app/components/Loading";

type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

export default function UsersClient()
{
    const [users, setUsers] = useState<User[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [filterUsers, setFilterUsers] = useState<User[]>();

    useEffect(() =>
    {
        async function fetchUsers()
        {
            try
            {
                const response = await fetch("https://www.freetestapi.com/api/v1/users");
                if (!response.ok)
                {
                    throw new Error("Failed to fetch users.");
                }
                const data = await response.json();
                setUsers(data);
                setFilterUsers(data);
            } catch (error)
            {
                setError("Failed to fetch data.");
                if (error instanceof Error)
                {
                    setError(`Failed to fetch users: ${error.message}`);
                }
            } finally
            {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    const searchUsers = (key: string) =>
    {
        setFilterUsers(users?.filter(user => user.name.toLowerCase().includes(key.toLowerCase()) || user.email.toLowerCase().includes(key.toLowerCase()) || user.username.toLowerCase().includes(key.toLowerCase()) || user.phone.toLowerCase().includes(key.toLowerCase())));
    }

    if (loading)
    {
        return (<div className={"flex items-center justify-center"}>
            <Loading/>
        </div>)
    }

    if (error)
    {
        return (<div>{error}</div>)
    }

    return (
        <div className={"space-y-5"}>
            <h1 className={"text-3xl text-gray-700 font-semibold"}>Data fetching from client site</h1>
            <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <i className="fi fi-rr-search text-gray-700"></i>
                </div>
                <input type="text" id="simple-search"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full ps-10 p-2.5"
                       placeholder="Search by name..."
                       onChange={(e) => searchUsers(e.target.value)}
                />
            </div>
            <table className={"w-full"}>
                <thead>
                <tr>
                    <th className={"text-gray-700 px-2 py-4"}>Id</th>
                    <th className={"text-left text-gray-700 px-2 py-4"}>Name</th>
                    <th className={"text-left text-gray-700 px-2 py-4"}>Username</th>
                    <th className={"text-left text-gray-700 px-2 py-4"}>Email</th>
                    <th className={"text-left text-gray-700 px-2 py-4"}>Phone</th>
                </tr>
                </thead>
                <tbody>
                {
                    filterUsers?.map((user: User) => (
                        <tr key={user.id}>
                            <td className={"text-center px-2 py-4"}>{user.id}</td>
                            <td className={"px-2 py-4"}>{user.name}</td>
                            <td className={"px-2 py-4"}>{user.username}</td>
                            <td className={"px-2 py-4"}>{user.email}</td>
                            <td className={"px-2 py-4"}>{user.phone}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}