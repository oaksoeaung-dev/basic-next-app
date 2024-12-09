"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

type TSideBarMenuItem = {
    path: string,
    pathStartsWith?: boolean,
    label: string,
    icon: string
}

export default function SidebarMenuItem({path, pathStartsWith = false, label, icon}:TSideBarMenuItem)
{
    const pathName = usePathname();
    return (
        <li>
            <Link href={path} className={(pathStartsWith ? pathName.startsWith(path) : path == pathName) ? "flex items-center p-2 text-gray-900 rounded-lg bg-gray-100 group" : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"}>
                <span className="ms-3 flex item-center justify-center gap-3 text-sm">
                    <i className={icon}></i>
                    <span>{label}</span>
                </span>
            </Link>
        </li>
    )
}