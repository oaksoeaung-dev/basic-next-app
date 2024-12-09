import SidebarMenuItem from "@/app/components/SidebarMenuItem";

export default function Sidebar()
{
    return (
        <aside
            className={"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"}>
            <div className={"h-full px-3 py-4 overflow-y-auto bg-gray-50"}>
                <ul className={"space-y-2 font-medium"}>

                    <SidebarMenuItem path={"/"} label={"Home"} icon={"fi fi-rr-house-chimney"}/>
                    <SidebarMenuItem path={"/routing"} pathStartsWith={true} label={"Routing"} icon={"fi fi-rr-route"}/>
                    <SidebarMenuItem path={"/data-fetching"} pathStartsWith={true} label={"Data Fetching"} icon={"fi fi-rr-back-up"}/>
                    <SidebarMenuItem path={"/send-data-with-post"} label={"Send Data With Post"} icon={"fi fi-rr-paper-plane-launch"}/>
                    <SidebarMenuItem path={"/form-handling/html-validation"} pathStartsWith={true}  label={"Form Handling"} icon={"fi fi-rr-form"}/>
                </ul>
            </div>
        </aside>
    )
}

