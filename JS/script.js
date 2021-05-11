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

    addAluno(nome, dataNasc, genero, email, foto){
        if(!nome || !dataNasc || !genero || !email || !foto)
            throw "Dado(s) inválidos!";
        if(/[0-9]/.test(nome))
            throw "Nome Inválido!";
        if(/[A-z]/.test(dataNasc))
            throw "Data Inválida!"
        
        this.aluno.push(new Aluno(this.aluno.length + 1, nome, dataNasc, genero, email, foto));
    }

    addDisciplina(nome, docente){
        if(!nome || !docente)
            throw "Dado(s) inválidos!";

        this.disciplina.push(new Disciplina(this.disciplina.length + 1, nome, docente));
    }
}

class Aluno{
    constructor(id, nome, dataNasc, genero, email, foto){ 
        this.id = id 
        this.nome = nome
        this.dataNasc = dataNasc
        this.genero = genero
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


