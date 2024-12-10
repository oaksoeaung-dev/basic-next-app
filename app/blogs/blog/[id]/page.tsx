import {get} from "@/app/server/action";
import {BlogType, Table} from "@/app/server/utils/types";

type BlogParam = {
    params: Promise<{id: string}>
}

export default async function Blog({params}: BlogParam)
{
    const {id} = await params;
    const {success} = await get<BlogType>(Table.BlogsTable, Number(id));
    return(
        <div className={""}>
            <div className={"p-5 border rounded-lg shadow max-w-xl space-y-5"}>
                <h1 className={"text-3xl text-gray-700 font-semibold"}>{success!.title}</h1>
                <p className={"text-gray-700"}>{success!.description}</p>
            </div>
        </div>
    )
}