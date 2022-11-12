import express from "express";
import { listTask, createTask, updateContent, updateTaskStatus, deleteTask} from "../controllers/tasksController.js";

const router = express.Router()


router.get("/task", listTask)
router.post("/task", createTask)
router.put("/task/:id", updateContent)
router.patch("/statusUpdate/:id", updateTaskStatus)
router.delete("/deleteTask/:id", deleteTask)


export default router