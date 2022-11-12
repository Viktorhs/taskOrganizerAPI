type TaskEntity = {
    id: number,
    task: string,
    description?: string,
    day: Date | string,
    responsible: number,
    status: boolean,
    createdAt: Date | string
}

type Task = Omit<TaskEntity, "id" | "createdAt" | "status">

export {
    TaskEntity,
    Task
}