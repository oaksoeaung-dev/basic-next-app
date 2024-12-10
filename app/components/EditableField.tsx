"use client"
import {useState} from "react";
import {deleteTodo, updateTodo} from "@/app/server/action";

const EditableField = ({initialValue, todoId}: { initialValue: string, todoId: string }) =>
{
    const [isEditing, setIsEditing] = useState(false);
    const [value] = useState(initialValue);

    const handleEditClick = () =>
    {
        setIsEditing(true);
    };

    const handleEditCloseClick = () =>
    {
        setIsEditing(false);
    };


    const handleDelete = (id: string) =>
    {
        const formData = new FormData();
        formData.append("id", id);
        deleteTodo(formData);
        window.location.reload();
    }


    return (
        <div>
            <form action={updateTodo} className={"flex items-center w-full gap-3"}>
                <input type={"text"} name={"id"} value={todoId} hidden={true} readOnly={true} />
                {
                    isEditing ? (
                        <input
                            type="text"
                            defaultValue={value}
                            name={"title"}
                            className={"w-full px-2 py-1.5 focus:outline-none focus:border focus:rounded-lg focus:border-gray-500"}
                            autoFocus
                        />
                    ) : (
                        <div className={"w-full px-2 py-1.5 border border-transparent"}>{value}</div>
                    )
                }

                {
                    isEditing ? (
                        <div className={"flex items-center gap-3"}>
                            <a onClick={() => handleEditCloseClick()} className={"text-lg cursor-pointer text-sky-500"}>
                                <i className="fi fi-rr-square-x"></i></a>
                            <button type={"submit"} className={"text-lg cursor-pointer text-green-500"}>
                                <i className="fi fi-rr-check-circle"></i></button>

                        </div>
                    ) : (
                        <div className={"flex items-center gap-3"}>
                            <button type={"button"} onClick={handleEditClick} className={"text-lg text-sky-500"}>
                                <i className="fi fi-rr-pen-square"></i></button>
                            <button type={"button"} onClick={() => handleDelete(todoId)} className={"text-lg text-red-500"}>
                                <i className="fi fi-rr-square-minus"></i></button>
                        </div>
                    )
                }
            </form>
        </div>
    );
};

export default EditableField;