import { userEntity } from './../protocols/users';
import { QueryResult } from "pg";
import connection from "../database/db.js";

async function registerUser(name: string): Promise<void> {
    connection.query(
		'INSERT INTO users (name) VALUES ($1);',
		[name])
}

async function listAllUsers(): Promise<QueryResult<userEntity>> {
	return connection.query(
		'SELECT * FROM users;')
}

async function listUniqueUsers(id: number): Promise<QueryResult<userEntity>> {
	return connection.query(
		'SELECT * FROM users WHERE id = $1;',
		[id])
}

export {
    registerUser,
	listAllUsers,
	listUniqueUsers
}