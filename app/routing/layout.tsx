import Link from "next/link";

export default function RoutingLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className={"space-y-5"}>
            <nav className={"p-4 bg-gray-50 shadow rounded-lg border border-gray-100"}>
                <ul className={"flex gap-5 items-center"}>
                    <li className={"text-gray-700"}>
                        <Link href={"/routing/about"}>About</Link>
                    </li>
                    <li className={"text-gray-700"}>
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