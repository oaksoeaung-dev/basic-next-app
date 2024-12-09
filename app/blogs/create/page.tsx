import React from "react";
import FormButton from "@/app/components/FormButton";
import {createBlog} from "@/app/server/action";
import Form from "next/form";

export default function CreateBlog()
{
    return(
        <div className={"max-w-lg"}>
            <h2 className={"text-gray-700 font-semibold text-2xl my-5"}>Create new blog</h2>
            <Form className={"space-y-5"} action={createBlog}>
                <div className={"flex flex-col gap-1"}>
                    <label htmlFor={"title"} className={"text-xs font-bold text-gray-700"}>Title</label>
                    <input
                        type={"text"}
                        name={"title"}
                        id={"title"}
                        required={true}
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
                        className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                    />
                </div>

                <FormButton label={"Submit"}/>
            </Form>
        </div>
    )
}