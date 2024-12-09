type BlogId = {
    params: Promise<{id: string}>
}

export default async function BlogId({params}: BlogId)
{
    const {id} = await params;
    return(
        <div className={"flex items-center justify-center"}>
            <div className={"w-96 space-y-5"}>
                <img src={"/images/laptop.jpg"} className={"w-full h-52 object-cover"} />
                <h1 className={"text-3xl font-semibold text-gray-700"}>Blog {id}</h1>
                <p className={"text-gray-700"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}