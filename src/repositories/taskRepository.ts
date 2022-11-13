import { Task, TaskEntity } from 'src/protocols/tasks';
import { QueryResult } from "pg";
import connection from "../database/db.js";

async function insertTask(task: Task): Promise<void>{
    connection.query(
		'INSERT INTO tasks (task, description, day, responsible) VALUES ($1, $2, $3, $4);',
		[task.task, task.description, task.day, task.responsible])
}

async function listAll(): Promise<QueryResult<TaskEntity>> {
    return connection.query(
        `SELECT tasks.id, tasks.task, tasks.description, tasks.day, tasks."isComplete" , users.name AS "responsible" , tasks."createdAt"
        FROM tasks 
        JOIN users 
        ON tasks."responsible" = users.id`
    )
}

async function deleteOne(id: number): Promise<void>{
    connection.query(
        'DELETE FROM tasks WHERE id = $1',
        [id]
    )
}

async function updateTask(task: Task, id: number){
    connection.query(
        'UPDATE tasks SET task = $1, description = $2, day = $3, responsible = $4 WHERE id = $5',
        [task.task, task.description, task.day, task.responsible, id])
}

async function updateStatus(status: boolean,id: number): Promise<void>{
    connection.query(
        'UPDATE tasks SET "isComplete" = $1 WHERE id = $2',
        [status, id]
    )
}

async function searchTask(id: number): Promise<QueryResult<TaskEntity>>{
    return connection.query(
        `SELECT tasks.id, tasks.task, tasks.description, tasks.day, tasks."isComplete" , users.name AS "responsible", tasks."createdAt"
        FROM tasks 
        JOIN users 
        ON tasks."responsible" = users.id
        WHERE task.id = $1`,
        [id]
    )
}

async function listResponsible(id: number): Promise<QueryResult<TaskEntity>> {
    return connection.query(
        `SELECT tasks.id, tasks.task, tasks.description, tasks.day, tasks."isComplete" , users.name AS "responsible", tasks."createdAt"
        FROM tasks 
        JOIN users 
        ON tasks."responsible" = users.id
        WHERE task.responsible = $1`,
        [id]
    )
}

export {
    insertTask,
    listAll,
    deleteOne,
    updateTask,
    updateStatus,
    searchTask,
    listResponsible
}