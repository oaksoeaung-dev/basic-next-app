import { ZodError } from 'zod';
import { IStringMap } from '../_types/deal';

export const convertZodErrors = (error: ZodError): IStringMap => {
    return error.issues.reduce((acc: { [key: string]: string }, issue) => {
        acc[issue.path[0]] = issue.message;
        return acc;
    }, {});
};