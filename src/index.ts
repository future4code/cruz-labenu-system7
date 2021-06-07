import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";
import {post_class} from "./post/class";
import {post_student} from "./post/student";
import {post_teacher} from "./post/teacher";
import {put_class_student} from "./put/put_class_student";
import {put_Class_teacher} from "./put/put_class_teacher";
import {get_student} from "./get/student";

app.post('/class', async(req: Request, res: Response) => {
  await post_class(req, res)
})

app.put('/class/student', async(req: Request, res: Response) => {
  await put_class_student(req, res)
})

app.put('/class/teacher', async(req: Request, res: Response) => {
  await put_Class_teacher(req,res)
})

app.post('/student',  async(req: Request, res: Response) => {
  await post_student(req, res)
})

app.get('/student/:id', async(req: Request, res: Response) => {
  await get_student(req, res)
})

app.post('/teacher', async(req: Request, res: Response) => {
  await post_teacher(req,res)
})