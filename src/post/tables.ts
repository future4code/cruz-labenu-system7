import {connection} from "../connection";
import {Request, Response} from "express";

export async function tables(req: Request, res: Response): Promise<any> {
  try {
    await connection.raw(`
      create table Class_17(
        id int primary key,
        name varchar(50) not null,
        start_date date not null ,
        end_date date not null default 0,
        module int not null
      );

      create table Student_17(
        id int primary key ,
        name varchar(50) not null ,
        email varchar(50) not null unique ,
        birth_date date not null ,
        class_id int ,
        foreign key (class_id) references Class_17(id)
      );
      
      create table Teacher_17(
        id int primary key ,
        name varchar(50) not null ,
        email varchar(50) not null unique ,
        birth_date date not null ,
        class_id int ,
        foreign key (class_id) references Class_17(id)
      );
      
      create table Hobby_17(
        id int primary key ,
        name varchar(50) not null
      );
      
      create table Student_hobby_17(
        student_id int not null ,
        hobby_id int not null ,
        foreign key (student_id) references Student_17(id),
        foreign key (hobby_id) references Hobby_17(id)
      );
      
      create table Specialty_17(
        id int primary key ,
        name varchar(50) not null
      );
      
      create table Teacher_specialty_17(
        teacher_id int not null ,
        specialty_id int not null ,
        foreign key (teacher_id) references Teacher_17(id),
        foreign key (specialty_id) references Specialty_17(id)
      );
    `)
  } catch (err) {
    res.status(res.statusCode).send({message: err.message || err.sqlMessage})
  }
}