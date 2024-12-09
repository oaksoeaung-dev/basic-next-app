import {revalidatePath} from "next/cache";
type User = {
    id: number,
    name: string
}
export default async function SendDataWithPost()
{
    async function addUser(formData: FormData)
    {
        "use server"
        const name = formData.get("name");
        const response = await fetch("https://6752a041d1983b9597b6c116.mockapi.io/users",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({name})
        })
        const newUser = await response.json();
        revalidatePath("/send-data-with-post");
        console.log(newUser);
    }

    const response = await fetch("https://6752a041d1983b9597b6c116.mockapi.io/users");
    const users: User[] = await response.json();

    return(
        <div className={"space-y-5"}>
            <div className={"grid grid-cols-3"}>
                <form action={addUser} className="max-w-md col-start-3 p-5 shadow-lg rounded-lg border border-gray-200">
                    <label htmlFor="default-search"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <i className="fi fi-rr-user-add text-gray-500"></i>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-4 ps-10 text-sm focus:outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                               placeholder="Name only.." required name={"name"}/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Add
                        </button>
                    </div>
                </form>
            </div>

            <div className={"grid grid-cols-3 gap-5"}>
                {
                    users.map( (user: User) => {
                        return (
                            <div key={user.id} className={"p-5 border border-gray-200 shadow-lg rounded-lg"}>
                                <p className={"text-gray-700 font-semibold"}>{user.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}