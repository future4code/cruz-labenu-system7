import {Request, Response} from "express";
import validate_email from "../validations/validate_email";
import {connection} from "../connection";

type Class_student = {
  id_class : number,
  id_student : number
}

export async function put_class_student(req: Request, res: Response): Promise<any> {
  try {
    const class_student : Class_student = req.body as Class_student
    if(!validate_body(class_student)){
      throw new Error('Informe id do estudante e da turma.')
    }

    await connection('Student_17')
      .update('class_id',class_student.id_class)
      .where('id',class_student.id_student)

    res.status(200).send('Alterado!')
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}

function validate_body(class_student : Class_student) : boolean{
  return !(isNaN(class_student.id_class) ||
    isNaN(class_student.id_student));
}