import { Request, Response} from "express";
import { Task, TaskEntity } from "../protocols/tasks.js";
import { taskSchema } from "../schemas/taskSchemas.js";
import { deleteOne, insertTask, listAll, listResponsible, searchTask, updateStatus, updateTask } from '../repositories/taskRepository.js';

async function createTask(req: Request, res: Response){
    const response = req.body as Task;

    const {error} = taskSchema.validate(response)
   
    if(error){
        return res.sendStatus(422)
    }

    try {
        await insertTask(response)
        res.sendStatus(201)
    } catch (error) {
        console.log(error);
		return res.sendStatus(500)
    }
}

async function updateContent(req: Request, res: Response){
    const task = req.body as Task;
    const id: number = Number(req.params.id)

    const {error} = taskSchema.validate(task)
   
    if(error){
        return res.sendStatus(422)
    }


    try {

        const isValid = await searchTask(id)

        if(isValid.rowCount === 0){
            return res.sendStatus(404)
        }
    
        await updateTask(task, id)
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error);
		return res.sendStatus(500)
    }

}

async function updateTaskStatus(req: Request, res: Response){
    const id: number = Number(req.params.id)
    let status: boolean = true
   
    if(!id){
        return res.sendStatus(422)
    }


    try {

        const isValid = await searchTask(id)

        if(isValid.rowCount === 0){
            return res.sendStatus(404)
        }

        if(isValid.rows[0].status === true){
            status = false
        }

        await updateStatus(status, id)
        res.sendStatus(200)

        
    } catch (error) {
        console.log(error);
		return res.sendStatus(500)
    }

}

async function deleteTask(req: Request, res: Response){
    const id: number = Number(req.params.id)
   
    if(!id){
        return res.sendStatus(422)
    }

    try {

        const isValid = await searchTask(id)

        if(isValid.rowCount === 0){
            return res.sendStatus(404)
        }

        await deleteOne(id)
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error);
		return res.sendStatus(500)
    }
    
}

async function listTask(req: Request, res: Response){
    const id: number = Number(req.query.id)
    let list: TaskEntity[]
    try {
        if(id){
            list = (await listResponsible(id)).rows
        }else{
            list = (await listAll()).rows
        }
        res.send(list).status(200)

    } catch (error) {
        console.log(error);
		return res.sendStatus(500)
    }
    
}


export {
    listTask,
    createTask,
    updateContent,
    updateTaskStatus,
    deleteTask,
}