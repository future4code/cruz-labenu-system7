import {Request, Response} from "express";
import {connection} from "../connection";

export async function get_class_members(req: Request, res: Response, table:string): Promise<any> {
  try {
    const id = Number(req.params.id)
    if(isNaN(id)){
      throw new Error('Id precisa ser um número')
    }

    const result = await connection(table)
      .select('*')
      .where('class_id', id) as []

    if(!result.length){
      throw new Error('Não encontrado.')
    }

    res.status(200).send(result)
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}