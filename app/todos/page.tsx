"use client"
import {createTodo, getAll} from "@/app/server/action";
import FormButton from "@/app/components/FormButton";
import {Table, TodoType} from "@/app/server/utils/types";
import {useEffect, useState} from "react";
import EditableField from "@/app/components/EditableField";

export default function Todos()
{
    const [data, setData] = useState<TodoType[] | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            const {success} = await getAll<TodoType[]>(Table.TodosTable);
            if(success)
            {
               setData(success);
            }
        }
        fetchData();
    },[setData]);

    return (
        <div>
            <div className={"space-y-5"}>
                <p className={"flex items-center gap-2"}>
                    <span className={"text-xl text-gray-700 font-semibold"}>Tech : </span>
                    <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>Next.Js</span>
                    <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>TypeScript</span>
                    <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>Drizzle</span>
                    <span className={"px-2.5 py-1 rounded-full text-xs font-semibold text-white bg-teal-500"}>PostgreSQL</span>
                </p>

                <div className={"flex items-center justify-center"}>
                    <div className={"max-w-xl border w-full rounded-lg p-5 shadow"}>
                        <div>
                            <h1 className={"text-center text-3xl font-semibold text-gray-700"}>Todo</h1>
                        </div>
                        <div>
                            <form className={"grid grid-cols-4 gap-2"} action={createTodo}>
                                <input name={"title"} className={"border rounded-lg focus:outline-none col-span-3 focus:border-gray-500 p-2 w-full"} />
                                <FormButton label={"Add"}/>
                            </form>
                        </div>
                        <hr className={"my-5"}/>
                        {
                            data?.length === 0 && <p className={"text-gray-700 text-center font-semibold text-2xl col-span-3"}>There is no todos yet.</p>
                        }

                        {
                            data?.map((todo) => (
                                <EditableField key={todo.id} initialValue={todo.title} todoId={todo.id.toString()}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}