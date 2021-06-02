import { Request, Response } from "express";
import app from "./app";
import { connection } from "./connection";
import {post_class} from "./post/class";

app.post('/class', async(req: Request, res: Response) => {
  debugger
  await post_class(req, res)
})