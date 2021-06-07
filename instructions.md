#Instruções

###GET

<h5>Retorna estudantes da classe</h5>
<h6>
	endpoint: /class/:id/students
</h6>

<h5>Retorna professores da classe</h5>
<h6>
endpoint: /class/:id/teachers
</h6>

<h5>Retorna idade de um estudante</h5>
<h6>
endpoint: /student/:id
</h6>

###POST

<h5>Cria um classe</h5>
<h6>
endpoint: /class <br>
Espera receber no body-> name,start_date,end_date, module : number
</h6>

<h5>Cria um estudante</h5>
<h6>
endpoint: /student <br>
Espera receber no body-> name,email, birth_date, class_id? : number
</h6>

<h5>Cria um professor</h5>
<h6>
endpoint: /teacher <br>
Espera receber no body-> name,email, birth_date, class_id? : number
</h6>

###PUT

<h5>Adiciona estudante a uma turma</h5>
<h6>
endpoint: /class/student <br>
Espera receber no body-> id_class : number, id_student : number
</h6>

<h5>Adiciona professor a uma turma</h5>
<h6>
endpoint: /class/teacher <br>
Espera receber no body-> id_class : number, id_teacher : number
</h6>

###DEL
<h5>Remove aluno da turma</h5>
<h6>
endpoint: /student/:id/class
</h6>
<h5>Remove professor da turma</h5>
<h6>
endpoint: /teacher/:id/class
</h6>