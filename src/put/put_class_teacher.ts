import {Request, Response} from "express";
import validate_email from "../validations/validate_email";
import {connection} from "../connection";

type Class_teacher = {
  id_class : number,
  id_teacher : number
}

export async function put_Class_teacher(req: Request, res: Response): Promise<any> {
  try {
    const class_teacher : Class_teacher = req.body as Class_teacher
    if(!validate_body(class_teacher)){
      throw new Error('Informe id do estudante e da turma.')
    }

    await connection('Teacher_17')
      .update('class_id',class_teacher.id_class)
      .where('id',class_teacher.id_teacher)

    res.status(200).send('Alterado!')
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}

function validate_body(class_teacher : Class_teacher) : boolean{
  return !(isNaN(class_teacher.id_class) ||
    isNaN(class_teacher.id_teacher));
}