"use client";
import classNames from "classnames";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function RoutingLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    const pathName = usePathname();
    const ActiveNavLinkClass = classNames(
        "text-gray-700 underline underline-offset-4 decoration-2 decoration-gray-700"
    );
    const NavLinkClass = classNames(
        "text-gray-700"
    );

    return (
        <div className={"space-y-5"}>
            <nav className={"p-4 bg-gray-50 shadow rounded-lg border border-gray-100"}>
                <ul className={"flex gap-5 items-center"}>
                    <li className={pathName === "/routing/about" ? ActiveNavLinkClass : NavLinkClass}>
                        <Link href={"/routing/about"}>About</Link>
                    </li>
                    <li className={pathName.startsWith("/routing/blogs") ? ActiveNavLinkClass : NavLinkClass}>
                        <Link href={"/routing/blogs"}>Blogs</Link>
                    </li>
                </ul>
            </nav>

            <div className={"p-4 bg-gray-50 shadow rounded-lg border border-gray-100"}>
                {children}
            </div>
        </div>
    );
}