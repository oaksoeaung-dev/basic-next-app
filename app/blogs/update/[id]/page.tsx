import { getBlog, updateBlog} from "@/app/server/action";
import Form from "next/form";
import FormButton from "@/app/components/FormButton";

type BlogType = {
    params: Promise<{id: string}>
}

export default async function UpdateBlog({params}: BlogType)
{
    const {id} = await params;
    const {success} = await getBlog(Number(id));
    return(
        <div className={"max-w-lg"}>
            <h2 className={"text-gray-700 font-semibold text-2xl my-5"}>Edit blog</h2>
            <Form className={"space-y-5"} action={updateBlog}>
                <input type={"text"} name={"id"} value={id} hidden={true} readOnly={true}/>
                <div className={"flex flex-col gap-1"}>
                    <label htmlFor={"title"} className={"text-xs font-bold text-gray-700"}>Title</label>
                    <input
                        type={"text"}
                        name={"title"}
                        id={"title"}
                        required={true}
                        defaultValue={success?.title}
                        className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                    />
                </div>
                <div className={"flex flex-col gap-1"}>
                    <label htmlFor={"description"} className={"text-xs font-bold text-gray-700"}>Description</label>
                    <input
                        type={"text"}
                        name={"description"}
                        id={"description"}
                        required={true}
                        defaultValue={success?.description}
                        className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                    />
                </div>

                <FormButton label={"Update"}/>
            </Form>
        </div>
    )
}