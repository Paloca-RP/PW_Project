class Aluno{
    /*
        -> quando se for inserir alunos tem de se verificar quantas posiçoes no array estam a ser usadas e incremetar para fazer o ID automático
        -> o parametro foto é só o nome do ficheiro

    */

    constructor(id, nome, dataNasc, genero, email, foto){ 
        this.id = id 
        this.dataNasc = dataNasc
        this.genero = genero

        if(nome != null){
            this.nome = nome
        }else{
            nome = ""
        }
        
        if(email != null){
            this.email = email
        }else{
            email = ""
        }

        if(foto != null){
            this.foto = foto
        }else{
            foto = ""
        }
    }
}
class ListaAlunos
{
    constructor(){
        this.alunos = []
    }

    adicionarAluno(nome, dataNascimento, genero, email, foto){
        // validar com throw

        // Calcular o ID automatico

        let mx = 0;
        for(let aluno of this.alunos)
            if ( aluno.id > mx)
                mx = aluno.id
        mx++;

        let aluno = new Aluno( mx, nome, dataNascimento, genero, email, foto )
        this.alunos.push(aluno)
    }

        
    showAlunos(divid){
        let divobj = document.getElementById(divid)
        //while(divobj.firstChild)
        //    divobj.removeChild(divobj.firstChild);
        var str = "<table>"
        for( var alu of this.alunos)
            str += "<tr><td>" + alu.nome + "</td></tr>"
        str += "</table>"
        divobj.innerHTML = str
    }

}


