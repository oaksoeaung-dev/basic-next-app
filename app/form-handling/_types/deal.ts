export interface IDealFormState<T>{
    errors?: IStringMap
    successMsg?: string,
    data?: T
    blurs?: IStringToBooleanMap
}

export interface IStringMap
{
    [key: string]: string,
}

export interface IStringToBooleanMap
{
    [key: string] : boolean,
}