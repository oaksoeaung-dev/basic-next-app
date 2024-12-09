"use client"
import {useFormStatus} from "react-dom";

export default function FormButton({label}: {label: string})
{
    const {pending} = useFormStatus();
    return (
        <button disabled={pending} className="text-white w-full bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 disabled:bg-gray-400">
            {label}
        </button>
    )
}