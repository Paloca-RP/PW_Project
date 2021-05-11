class Turma{
    
    constructor (nome, ano, responsavel, emailResponsavel, curso){
        this.nome = nome
        this.ano = ano
        this.responsavel = responsavel
        this.emailResponsavel = emailResponsavel
        this.curso = curso

        this.aluno = []
        this.disciplina = []
    }
}

class Aluno{
    constructor(id, nome, dataNasc, genero, email, foto){ 
        this.id = id 
        this.dataNasc = dataNasc
        this.genero = genero
        this.nome = nome
        this.email = email
        this.foto = foto
    }
}

class Disciplina{
    constructor (id, nome, docente){
        this.id = id        
        this.nome = nome        
        this.docente = docente
    }    
}

class InscricaoDisc{
    constructor(){
        this.id = id        
        this.disciplina_ID
        this.aluno_ID
        this.nota
    }
}

class Revisao{
    constructor(){
        this.dia
        this.disciplina_ID
        this.aluno_ID
        this.notaAntes
        this.notaDepois
        this.efetiva
        this.fechada
    }
}
