export type Class = {
  id : number,
  name : string,
  start_date : string,
  end_date : string,
  module : number
}

export type Student = {
  id : number,
  name : string,
  email : string,
  birth_date : string,
  class_id? : number
}

export type Teacher = {
  id : number,
  name : string,
  email : string,
  birth_date : string,
  class_id? : number
}

export type Hobby = {
  id : number,
  name : string
}

export type Student_hobby = {
  student_id : number,
  hobby_id : number
}

export type Specialty = {
  id : number,
  name : string
}

export type Teacher_specialty = {
  teacher_id : number,
  specialty_id : number
}