import Blog from "@/app/components/Blog";

export default function Blogs()
{
    return (
        <div className={"flex gap-5"}>
            <Blog link={"blogs/1"} srcImg={"/images/laptop.jpg"} header={"Blog 1"} content={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}/>

            <Blog link={"blogs/2"} srcImg={"/images/laptop.jpg"} header={"Blog 2"} content={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}/>

            <Blog link={"blogs/3"} srcImg={"/images/laptop.jpg"} header={"Blog 3"} content={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}/>
        </div>
    )
}