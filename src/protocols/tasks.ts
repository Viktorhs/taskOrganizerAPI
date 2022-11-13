type TaskEntity = {
    id: number,
    task: string,
    description?: string,
    day: Date | string,
    responsible: number | string,
    isComplete: boolean,
    createdAt: Date | string
}

type Task = Omit<TaskEntity, "id" | "createdAt" | "isComplete">

export {
    TaskEntity,
    Task
}