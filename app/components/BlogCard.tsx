import Link from "next/link";
import {deleteBlog} from "@/app/server/action";

type BlogCardProps = {
    id: number,
    title: string,
    description: string,
}

export default function BlogCard({id,title,description}: BlogCardProps)
{
    return (
            <div className={"p-5 border rounded-lg shadow space-y-5"}>
                <Link href={`blogs/blog/${id}`}>
                    <h1 className={"text-2xl text-gray-700 font-semibold"}>{title}</h1>
                    <p className={"text-gray-700 text-sm"}>{description}</p>
                </Link>
                <div className={"flex items-center justify-end gap-4"}>
                    <Link href={`/blogs/update/${id}`} className={"text-gray-50 p-2 rounded-lg bg-sky-500"}>
                        <i className="fi fi-rr-pencil"></i>
                    </Link>
                    <form action={deleteBlog}>
                        <input type={"text"} name={"id"} value={id} hidden={true} readOnly={true}/>
                        <button type={"submit"} className={"text-gray-50 p-2 rounded-lg bg-red-500"}>
                            <i className="fi fi-rr-trash"></i>
                        </button>
                    </form>
                </div>
            </div>

    )
}