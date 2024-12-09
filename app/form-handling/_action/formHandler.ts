"use server"
import {dealSchema} from "@/app/form-handling/_schemas/deal";
import {IDealFormState} from "@/app/form-handling/_types/deal";
import {convertZodErrors} from "@/app/form-handling/_utils/errors";

export const formHandlerAction = async (formData: FormData):Promise<IDealFormState<undefined>> =>
{
    const unvalidatedDeal = {
        name: formData.get("name"),
        link: formData.get("link"),
        couponCode: formData.get("couponCode"),
        discount: formData.get("discount")
    }

    const validated = dealSchema.safeParse(unvalidatedDeal);

    if(!validated.success)
    {
        const errors = convertZodErrors(validated.error);
        return {errors};
    }
    else{
        return {successMsg: "Deal added successfully.",errors: {}}
    }
}