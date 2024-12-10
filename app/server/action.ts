"use server"
import {db} from "@/app/server/index";
import {blogs, todos} from "@/app/server/schema";
import {redirect} from "next/navigation";
import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";
import {Table} from "@/app/server/utils/types";


export const getAll = async <T>(table: Table) =>
{

    let allData: T | undefined;
    if (table == Table.BlogsTable)
    {
        allData = await db.query.blogs.findMany() as T;
    } else if (table == Table.TodosTable)
    {
        allData = await db.query.todos.findMany() as T;
    }

    if (!allData)
    {
        return {error: "No data found."}
    }

    return {success: allData}
}

export const createBlog = async (formData: FormData) =>
{
    const blogTitle = formData.get("title")!.toString();
    const blogDescription = formData.get("description")!.toString();
    await db.insert(blogs).values({title: blogTitle, description: blogDescription});
    redirect("/blogs");
}

export const createTodo = async (formData: FormData) => {
    const todoTitle = formData.get("title")!.toString();
    await db.insert(todos).values({title: todoTitle});
    redirect("/todos");
}

export const get = async <T>(table: Table, id: number) =>
{
    let data: T | undefined;
    if (table == Table.BlogsTable)
    {
        data = await db.query.blogs.findFirst({
            where: (bolgs, {eq}) => eq(blogs.id, id),
        }) as T;

    }
    else if (table == Table.TodosTable)
    {
        data = await db.query.todos.findFirst({
            where: (bolgs, {eq}) => eq(todos.id, id),
        }) as T;
    }

    if (!data)
    {
        redirect(`/${table}`);
        return {error: "No post found"};
    }
    return {success: data};
}

export const deleteBlog = async (formData: FormData) =>
{
    const id = Number(formData.get("id"));
    await db.delete(blogs).where(eq(blogs.id, id));
    revalidatePath("/blogs");
    redirect("/blogs");
}

export const deleteTodo = async (formData: FormData) =>
{
    const id = Number(formData.get("id"));
    await db.delete(todos).where(eq(todos.id, id));
    revalidatePath("/todos");
    redirect("/todos");
}

export const updateBlog = async (formData: FormData) =>
{
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const blogId = Number(formData.get("id"));
    await db.update(blogs).set({title, description}).where(eq(blogs.id, blogId));
    revalidatePath("/blogs");
    redirect("/blogs");

}

export const updateTodo = async (formData: FormData) => {
    const title = formData.get("title")!.toString();
    const todoId = Number(formData.get("id"));
    await db.update(todos).set({title}).where(eq(todos.id, todoId));
    revalidatePath("/todos");
    redirect("/todos");
}