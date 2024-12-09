"use client"
import React, {useRef, useState} from "react";
import {IStringMap} from "@/app/form-handling/zod-validation/_types/deal";
import {formHandlerAction} from "@/app/form-handling/zod-validation/_action/formHandler";

export default function ZodValidation()
{
    const [errors, setErrors] = useState<IStringMap>({});
    const formRef = useRef<HTMLFormElement>(null);
    const handleFormSubmit = async(formData: FormData) => {
        const {errors, successMsg} = await formHandlerAction(formData);
        if(successMsg)
        {
            formRef.current?.reset();
        }
        setErrors(errors || {});
    }
    return (
        <div>
            <h1 className={"text-3xl font-semibold text-gray-700 my-5"}>Zod Validation</h1>
            <div className={"max-w-xl border p-5 rounded-lg"}>
                <form className={"w-full space-y-4"} action={handleFormSubmit} ref={formRef}>
                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"name"} className={"text-xs font-bold text-gray-700"}>Name</label>
                        <input
                            type={"text"}
                            name={"name"}
                            id={"name"}
                            className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                        />
                        {
                            errors?.name && (<span className={"text-red-500 text-xs font-semibold"}>{errors.name}</span>)
                        }
                    </div>

                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"link"} className={"text-xs font-bold text-gray-700"}>Link (Must start with https://)</label>
                        <input
                            type={"text"}
                            name={"link"}
                            id={"link"}
                            className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                        />
                        {
                            errors?.link && (<span className={"text-red-500 text-xs font-semibold"}>{errors.link}</span>)
                        }
                    </div>

                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"couponCode"} className={"text-xs font-bold text-gray-700"}>Coupon Code</label>
                        <input
                            type={"text"}
                            name={"couponCode"}
                            id={"couponCode"}
                            className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                        />
                        {
                            errors?.couponCode && (<span className={"text-red-500 text-xs font-semibold"}>{errors.couponCode}</span>)
                        }
                    </div>

                    <div className={"flex flex-col gap-1"}>
                        <label htmlFor={"discount"} className={"text-xs font-bold text-gray-700"}>Discount (%)</label>
                        <input
                            type={"number"}
                            name={"discount"}
                            id={"discount"}
                            className={"border rounded focus:outline-none focus:border-gray-500 p-1.5 text-sm text-gray-600"}
                        />
                        {
                            errors?.discount && (<span className={"text-red-500 text-xs font-semibold"}>{errors.discount}</span>)
                        }
                    </div>
                    <button className={"p-1.5 rounded bg-gray-700 text-gray-50 w-full text-sm"} type={"submit"}>Submit</button>
                </form>
            </div>
        </div>
    )
}