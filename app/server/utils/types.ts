export type BlogType = {
    id: number,
    title: string,
    description: string,
}

export type TodoType = {
    id: number,
    title: string,
}

export enum Table {
    BlogsTable = "blogs",
    TodosTable = "todos"
}