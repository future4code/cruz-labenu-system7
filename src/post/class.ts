import {Request, Response} from "express";
import {Class} from "../types_enum/types";
import {connection} from "../connection";

type Class_body = {
  name : string,
  start_date : string,
  end_date : string,
  module : number
}

export async function post_class (req:Request, res:Response){
  try{
    const class_body : Class_body = req.body as Class_body
    const class_1 = valide_body(class_body)

    if(!class_1){
      res.statusCode = 400
      throw new Error('Check name, start_date, end_date or module. Warning: only future dates' +
        ' and module 0-7')
    }

    await connection('Class_17').insert(class_1)

    res.status(201).send({message: 'Created!'})
  }catch (err){
    res.status(res.statusCode).send({message:err.message || err.sqlMessage})
  }
}

function valide_body(class_body : Class_body) : Class | boolean{
  if(!class_body.name ||
    !class_body.end_date ||
    !class_body.start_date ||
    isNaN(class_body.module) ||
    class_body.module<0 ||
    class_body.module>7
  )return false

  if(!validate_date(class_body.start_date) ||
    !validate_date(class_body.end_date)
  )return false


  const id = Date.now()
  return {
    ...class_body,
    id
  }
}

function validate_date(date : string) : boolean{
  // const reg = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  // if(!reg.test(date))return false
  const data = new Date(date+'T00:00:00')
  if(!data.getFullYear())return false

  const today = new Date()

  if(data.getFullYear()>today.getFullYear())return true
  else if(data.getFullYear()<today.getFullYear())return false

  if(data.getMonth()>today.getMonth())return true
  else if(data.getMonth()<today.getMonth())return false

  return data.getDate()+1>=today.getDate()

}