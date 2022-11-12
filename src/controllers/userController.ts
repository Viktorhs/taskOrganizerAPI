import { userEntity } from './../protocols/users';
import { Request, Response} from "express";
import { registerUser, listAllUsers, listUniqueUsers } from "../repositories/authRepository.js";

async function createUser(req: Request, res: Response) {
    const response: {
        name: string
    } = req.body;

    if(!response){
        return res.sendStatus(422)
    }

    try {
        await registerUser(response.name)
        res.sendStatus(201)
    } catch (error) {
        console.log(error);
		return res.sendStatus(500)
    }
}

async function listUsers(req: Request, res: Response){
    const id: number = Number(req.query.id)
    let list: userEntity[]
    try {
        if(id){
            list = (await listUniqueUsers(id)).rows
        }else{
            list = (await listAllUsers()).rows
        }
        res.send(list).status(200)

    } catch (error) {
        console.log(error);
		return res.sendStatus(500)
    }
    
}

export {
    createUser,
    listUsers
}