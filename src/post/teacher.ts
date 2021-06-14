import {Request, Response} from "express";
import {Student, Teacher} from "../types_enum/types";
import {date_difference} from "../validations/date";
import validate_email from "../validations/validate_email";
import {connection} from "../connection";

type Teacher_body = {
  name : string,
  email : string,
  birth_date : string,
  class_id? : number
}

export async function post_teacher(req: Request, res: Response) {
  try {
    const teacher_body : Teacher_body = req.body as Teacher_body

    if(!validate_body(teacher_body)){
      throw new Error('Erro no body')
    }

    const birth = date_difference(teacher_body.birth_date) as {year: number, month: number, day: number}
    if(birth.year>-18){
      throw new Error('Menor de 18')
    }

    if(!validate_email(teacher_body.email)){
      throw new Error('Atente-se ao formato de e-mail: email@email.email')
    }

    const teacher : Teacher = {
      ...teacher_body,
      id: Date.now()
    }

    await connection('Teacher_17').insert(teacher)

    res.status(201).send('Created!')
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}

function validate_body(teacher_body : Teacher_body) : Student | boolean{
  if(!teacher_body.name ||
    !teacher_body.email ||
    !teacher_body.birth_date ||
    (typeof teacher_body.class_id!== 'undefined' && typeof teacher_body.class_id!=='number')
  )return false

  const birth = date_difference(teacher_body.birth_date)
  return !!birth;
}