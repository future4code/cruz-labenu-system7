import {Request, Response} from "express";
import {connection} from "../connection";

export async function del_member_class(req: Request, res: Response, table:string): Promise<any> {
  try {
    const id = Number(req.params.id)
    if(isNaN(id)){
      throw new Error('Id precisa ser um número.')
    }

    await connection(table)
      .update({class_id : null})
      .where('id', id)

    res.status(200).send('Removido da classe.')
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}