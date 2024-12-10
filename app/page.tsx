"use client"
import {useState} from "react";

export default function Home()
{
    const [val, setVal] = useState("Hello Next.Js");

    return (
        <div className={"max-w-xl space-y-5"}>
            <h1 className={"text-3xl text-gray-700 font-semibold"}>{val}</h1>
            <input className={"p-2 border focus:outline-none rounded-lg w-full"} onChange={(e) => setVal(e.target.value) } placeholder={"Type something..."}/>
        </div>
    );
}
