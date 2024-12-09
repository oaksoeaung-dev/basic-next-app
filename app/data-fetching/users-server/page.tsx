type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

export default async function UsersServer()
{
    const response = await fetch("https://www.freetestapi.com/api/v1/users?limit=5");
    const users: User[] = await response.json();
    return (
        <div className={"space-y-5"}>
            <h1 className={"text-3xl text-gray-700 font-semibold"}>Data fetching from server site</h1>
            <table className={"w-full"}>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {
                    users?.map((user: User) => (
                        <tr key={user.id}>
                            <td className={"text-center px-2 py-4"}>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>

                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}