import {z} from "zod";

const bookSchema = z.object({
    title: z.string().max(5),
});

const book = {
    title: "abcde",
};

console.log("zod",bookSchema.parse(book));

export default function Zod()
{

}