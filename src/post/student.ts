import {Request, Response} from "express";
import {Student} from "../types_enum/types";
import {date_difference} from "../validations/date";
import validate_email from "../validations/validate_email";
import {connection} from "../connection";

type Student_body = {
  name : string,
  email : string,
  birth_date : string,
  class_id? : number
}

export async function post_student(req: Request, res: Response) {
  try {
    const student_body : Student_body = req.body as Student_body
    console.log('typeof', typeof student_body.class_id)

    if(!validate_body(student_body)){
      throw new Error('Erro no body')
    }

    const birth = date_difference(student_body.birth_date) as {year: number, month: number, day: number}
    if(birth.year>-18){
      throw new Error('Menor de 18')
    }

    if(!validate_email(student_body.email)){
      throw new Error('Atente-se ao formato de e-mail: email@email.email')
    }

    const student : Student = {
      ...student_body,
      id: Date.now()
    }

    await connection('Student_17').insert(student)

    res.status(201).send('Created!')
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}

function validate_body(student_body : Student_body) : Student | boolean{
  if(!student_body.name ||
    !student_body.email ||
    !student_body.birth_date ||
    (typeof student_body.class_id!== 'undefined' && typeof student_body.class_id!=='number')
  )return false

  const birth = date_difference(student_body.birth_date)
  return !!birth;
}