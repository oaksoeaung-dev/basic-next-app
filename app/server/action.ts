"use server"
import {db} from "@/app/server/index";
import {Blog} from "@/app/blogs/_utils/types";
import {blogs} from "@/app/server/schema";
import {redirect} from "next/navigation";
import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

export const getBlogs = async () => {
    const blogs: Blog[] = await db.query.blogs.findMany();
    if(!blogs)
    {
        return {error: "No blog found."}
    }

    return {success: blogs}
}

export const createBlog = async (formData: FormData) => {

    const blogTitle = formData.get("title")!.toString();
    const blogDescription = formData.get("description")!.toString();

    await db.insert(blogs).values({title: blogTitle,description: blogDescription});
    redirect("/blogs");
}

export const getBlog = async (id: number) => {
    const blog = await db.query.blogs.findFirst({
        where: (bolgs, {eq}) => eq(blogs.id, id),
    });
    // const blog = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1);
    if(!blog)
    {
        redirect("/blogs");
        return {error: "No post found"};
    }
    return {success: blog};
}

export const deleteBlog = async (formData: FormData) => {
    const id = Number(formData.get("id"));
    await db.delete(blogs).where(eq(blogs.id, id));
    revalidatePath("/blogs");
    redirect("/blogs");
}

export const updateBlog = async (formData: FormData) => {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const blogId = Number(formData.get("id"));
    await db.update(blogs).set({title, description}).where(eq(blogs.id, blogId));
    revalidatePath("/blogs");
    redirect("/blogs");

}