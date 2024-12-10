import BlogCard from "@/app/components/BlogCard";
import {getAll} from "@/app/server/action";
import Link from "next/link";
import {BlogType, Table} from "@/app/server/utils/types";

export default async function Blogs()
{
    const { success } = await getAll<BlogType[]>(Table.BlogsTable);
    return (
        <div>
            <div className={"grid grid-cols-3 gap-5"}>
                <div className={"col-span-3"}>
                    <p className={"flex items-center gap-2"}>
                        <span className={"text-xl text-gray-700 font-semibold"}>Tech : </span>
                        <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>Next.Js</span>
                        <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>TypeScript</span>
                        <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>Drizzle</span>
                        <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>PostgreSQL</span>

                    </p>
                </div>
                <div className={"flex col-span-3 justify-end"}>
                    <Link href={"/blogs/create"} className={"p-2 bg-gray-500 text-white rounded-lg"}>
                        Create New Blog
                    </Link>
                </div>
                {
                    success?.length === 0 && <p className={"text-gray-700 text-center font-semibold text-2xl col-span-3"}>There is no blog yet.</p>
                }
                {
                    success?.map( (blogs) => (
                        <BlogCard id={blogs.id} title={blogs.title} description={blogs.description} key={blogs.id}/>
                    ))
                }
            </div>
        </div>
    )
}