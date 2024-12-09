"use client"
import {useEffect} from "react";

export default function Error({error}: {error: Error})
{
    useEffect(() => {
        console.log(error);
    },[error])

    return (
        <div className={"flex items-center justify-center"}>
            <p className={"text-xl text-red-500 font-semibold"}>Error fetching: data</p>
        </div>
    )
}