import BlogCard from "@/app/components/BlogCard";
import {getBlogs} from "@/app/server/action";
import Link from "next/link";

export default async function Blogs()
{
    const { success} = await getBlogs();
    return (
        <div>
            <div className={"grid grid-cols-3 gap-5"}>
                <div className={"flex col-span-3 justify-end"}>
                    <Link href={"/blogs/create"} className={"p-2 bg-green-500 text-white rounded-lg"}>
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