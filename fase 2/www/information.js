class Information{
    constructor(id){
        this.id = id;
        this.alunos = [];
        this.turma = [];
        this.disciplina = [];
    }

    // TODO - showHome(), dependente do HTML


    // TODO - showTurma(), dependente do HTML


    // TODO - showAlunos(), dependente do HTML


    // TODO - showDisciplina(), dependente do HTML


    getAlunos(){
        this.alunos = [];
        var info = this;
        HTTPRequest("GET", "/alunos", function(res){
            for(let aluno of res.alunos){
                info.alunos.push(new Aluno(aluno.id, aluno.nome, aluno.dataNasc, aluno.genero, aluno.email, aluno.foto));
            }
        });
    }

    getTurma(){
        this.turma = [];
        var info = this;
        HTTPRequest("GET", "/turma", function(res){
            for(let classTurma of res.turma){
                info.turma.push(new Turma(classTurma.id, classTurma.nome, classTurma.ano, classTurma.responsavel, classTurma.email, classTurma.curso));
            }
        });
    }

    getDisciplina(){
        this.disciplina = [];
        var info = this;
        HTTPRequest("GET", "/disciplina", function(res){
            for(let disc of res.disciplina){
                info.disciplina.push(new Disciplina(disc.id, disc.nome, disc.docente));
            }
        });
    }

}

function HTTPRequest(type, url, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open(type, url);
    xhttp.responseType = "json";

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 & this.status == 200){
            callback(this.response);
        }
    }
    xhttp.send();
}