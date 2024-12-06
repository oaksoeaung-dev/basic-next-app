"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Sidebar()
{
    const pathName = usePathname();
    return (
        <aside
            className={"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"}>
            <div className={"h-full px-3 py-4 overflow-y-auto bg-gray-50"}>
                <ul className={"space-y-2 font-medium"}>
                    <li>
                        <Link href={"/"} className={ pathName == "/" ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 group" : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"}>

                            <span className="ms-3 flex item-center justify-center gap-3">
                                <i className="fi fi-rr-house-chimney"></i>Home
                            </span>
                        </Link>
                        <Link href={"/routing"}
                              className={ pathName.startsWith("/routing")  ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 group" : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"}>
                            <span className="ms-3 flex item-center justify-center gap-3"><i
                                className="fi fi-rr-route"></i>Routing</span>
                        </Link>
                        <Link href={"/data-fetching"}
                              className={ pathName.startsWith("/data-fetching")  ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 group" : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"}>
                            <span className="ms-3 flex item-center justify-center gap-3"><i
                                className="fi fi-rr-back-up"></i>Data Fetching</span>
                        </Link>
                        <Link href={"/send-data-with-post"}
                              className={ pathName.startsWith("/send-data-with-post")  ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 group" : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"}>
                            <span className="ms-3 flex item-center justify-center gap-3"><i
                                className="fi fi-rs-paper-plane-launch"></i>Send Data With Post</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

