import {Request, Response} from "express";
import {connection} from "../connection";

export async function get_student(req: Request, res: Response): Promise<any> {
  try {
    const id = Number(req.params.id)
    if(isNaN(id)){
      throw new Error('Id precisa ser um número.')
    }

    const result = await connection('Student_17')
      .select('birth_date')
      .where('id',id)

    if(!result.length){
      throw new Error('Estudante não encontrado.')
    }

    const age = new Date().getFullYear() - new Date(result[0].birth_date).getFullYear()

    res.status(200).send({age: age})

  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}