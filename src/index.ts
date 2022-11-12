import express from "express";
import 'dotenv/config'
import cors from "cors";
import { Request, Response } from "express";
import  authRouters from "./routes/authRoute.js"
import  taskRouters from "./routes/taskRoute.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/status', (req: Request, res: Response) => res.sendStatus(200))
app.use(authRouters)
app.use(taskRouters)

app.listen(process.env.PORT, ()=>{console.log(`Server is listening on port ${process.env.PORT}.`)})