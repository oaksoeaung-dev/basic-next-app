import BlogCard from "@/app/components/BlogCard";
import {getBlogs} from "@/app/server/action";

export default async function Blogs()
{
    const { success} = await getBlogs();
    return (
        <div>
            <div className={"grid grid-cols-3 gap-5"}>
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