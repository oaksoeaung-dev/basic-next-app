"use client";
import {useState} from "react";

export default function Counter()
{
    console.log("Counter component");
    const [count, setCount] = useState(0);

    return (
        <button className={"px-6 py-2 bg-teal-500 font-teal-700"} onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    )
}