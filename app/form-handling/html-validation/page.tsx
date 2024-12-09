import React from "react";

export default function HTMLValidation()
{
    return (
        <div>
            <h1 className={"text-3xl font-semibold text-gray-700 my-5"}>HTML Validation</h1>
            <div className={"max-w-xl border p-5 rounded-lg"}>
                <form className={"w-full space-y-4"}>
                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"name"} className={"text-xs font-bold text-gray-700"}>Name</label>
                        <input type={"text"} name={"name"} id={"name"} className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"} required={true} minLength={5}/>
                    </div>

                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"link"} className={"text-xs font-bold text-gray-700"}>Link (Must start with https://)</label>
                        <input
                            type={"text"}
                            name={"link"}
                            id={"link"}
                            className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                            required={true}
                            pattern={"[Hh][Tt][Tt][Pp][Ss]?:\\/\\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\\d{2,5})?(?:\\/[^\\s]*)?"}
                            title={"Please enter a valid URL"} // Pop-up message on hover
                        />
                    </div>

                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"couponCode"} className={"text-xs font-bold text-gray-700"}>Coupon Code</label>
                        <input type={"text"} name={"couponCode"} id={"couponCode"} className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}/>
                    </div>

                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"discount"} className={"text-xs font-bold text-gray-700"}>Discount (%)</label>
                        <input
                            type={"number"}
                            name={"discount"}
                            id={"discount"}
                            className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                            required={true}
                            defaultValue={10}
                            min={1}
                            max={100}
                        />
                    </div>
                    <button className={"p-1.5 rounded bg-gray-700 text-gray-50 w-full text-sm"}>Submit</button>
                </form>
            </div>
        </div>
    )
}