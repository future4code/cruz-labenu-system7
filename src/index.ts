import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";
import {post_class} from "./post/class";
import {post_student} from "./post/student";
import {post_teacher} from "./post/teacher";

app.post('/class', async(req: Request, res: Response) => {
  await post_class(req, res)
})

app.post('/student',  async(req: Request, res: Response) => {
  await post_student(req, res)
})

app.post('/teacher', async(req: Request, res: Response) => {
  await post_teacher(req,res)
})