import express from "express";
import { createUser, listUsers } from "../controllers/userController.js";

const router = express.Router()

router.post("/sign-in", createUser)
router.get("/users", listUsers)

export default router