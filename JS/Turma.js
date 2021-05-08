class Turma{
    /*    
        ->asd
    */

    constructor (id, nome, ano, responsavel, emailResponsavel, curso, listaAlunos, listaDisciplinas){
        this.id = id
        this.ano = ano
        this.listaAlunos = listaAlunos
        this.listaDisciplinas = listaDisciplinas
        
        if(nome != null){
            this.nome = nome
        }else{
            nome = ""
        }

        if(responsavel != null){
            this.responsavel = responsavel
        }else{
            responsavel = ""
        }

        if(emailResponsavel != null){
            this.emailResponsavel = emailResponsavel
        }else{
            emailResponsavel = ""
        }

        if(curso != null){
            this.curso = curso;
        }else{
            curso = ""
        }
    }

    showDisciplinas(divid){
        this.listaDisciplinas.showDisciplinas(divid)
    }

    showAlunos(divid){
        this.listaAlunos.showAlunos(divid)
    }
}