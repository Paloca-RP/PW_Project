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
        
        nome = nome.StringNome();
        this.aluno.push(new Aluno(this.aluno.length + 1, nome, dataNasc, genero, email, foto));
    }

    removeAluno(id){
        let contador = 0;
        for(let aluno of this.aluno){
            if(aluno.id == id){
                this.aluno.splice(contador, 1);
            }
            contador++;
        }

    }

    editAluno(id, atribute, value){
        if(!value){
            throw "Dado(s) inválidos!";
        }else{
            for(var i = 0; i < this.aluno.length; i++){
                if(this.aluno[i].id == id){
                    this.aluno[i][atribute] = value;
                    alert("O aluno com o ID: " + i + " teve o Atributo: " + atribute + " alterado para: " + value + ".");
                }else{
                    throw "Aluno não encontrado!";
                }
            } 
        }    
    }

    addDisciplina(nome, docente){
        if(!nome || !docente)
            throw "Dado(s) inválidos!";

        nome = nome.StringNome();
        this.disciplina.push(new Disciplina(this.disciplina.length + 1, nome, docente));
    }

    editDisciplina(id, atribute, value){
        if(!value){
            throw "Dado(s) inválidos!"
        }else{
            for(var i = 0; i<this.disciplina.length; i++){
                if(this.disciplina[i].id == id){
                    this.disciplina[i][atribute] = value;
                    alert("O aluno com o ID: " + i + " teve o atributo: " + atribute + " alterado para: " + value + "!");
                } else {
                    throw "Disciplina não encontrada!"
                }
            } 
        }
    }

    removeDisciplina(id){
        let contador = 0;
        for(let disciplina of this.disciplina){
            if(disciplina.id == id){
                this.disciplina.splice(contador, 1);
            }
            contador++;
        }
    }

    showTurmaAlunos(divid){
        this.aluno.showAlunos(divid);

    }

    showTurmaDisciplinas(divid){
        this.disciplina.showDisciplinas(divid);
    }

    showTurmaDiscInscritos(divid, disciplina_ID){
        this.InscricaoDisc.showInscricoesDisc(divid, disciplina_ID);
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

    showAlunos(divid){ //Lista os alunos
        let divobj = document.getElementById(divid);
        while(divobj.firstChild){
            divobj.removeChild(divobj.firstChild);
        }
        var table = document.createElement("table");
        table.className = "table";
        var thead = document.createElement("thead");
        table.append(thead);
        var row = document.createElement("tr");
        thead.appendChild(row);
        var th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Id"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Nome"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Data de Nascimento"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Género"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Email"));
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for(let alunos of this.alunos){
            var row = document.createElement("tr");
            tbody.appendChild(row);
            var td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.id));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.nome));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.dataNasc));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.genero));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.email));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(alunos.foto));
        }

        divobj.appendChild(table);

    }

} 

class Disciplina{
    constructor (id, nome, docente){
        this.id = id        
        this.nome = nome        
        this.docente = docente
    }

    showDisciplinas(divid){ //Lista as disciplinas
        let divobj = document.getElementById(divid);
        while(divobj.firstChild){
            divobj.removeChild(divobj.firstChild);
        }
        var table = document.createElement("table");
        table.className = "table";
        var thead = document.createElement("thead");
        table.append(thead);
        var row = document.createElement("tr");
        thead.appendChild(row);
        var th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Id"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Nome"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Docente"));
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for(let disciplinas of this.disciplina){
            var row = document.createElement("tr");
            tbody.appendChild(row);
            var td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.id));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.nome));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.docente));
        }

        divobj.appendChild(table);
    }
    
    
} 

class InscricaoDisc{
    constructor(id, disciplina_ID, aluno_ID, nota){
        this.id = id        
        this.disciplina_ID = disciplina_ID;
        this.aluno_ID = aluno_ID;
        this.nota = nota;
    }

    showInscricoesDisc(divid, disciplina_ID){

        /*
        O id da disciplina vai-se buscar ao botão da disciplina (que se vai clicar)
        E a partir daí é só listar todas as inscrições com esse ID
        */
        let divobj = document.getElementById(divid);
        while(divobj.firstChild){
            divobj.removeChild(divobj.firstChild);
        }
        var table = document.createElement("table");
        table.className = "table";
        var thead = document.createElement("thead");
        table.append(thead);
        var row = document.createElement("tr");
        thead.appendChild(row);
        var th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Id"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Id do Aluno"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Anotações"));
        th = document.createElement("th");
        row.appendChild(th);
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);


        
        for(let discID of this.disciplina){
            if(discID.id == disciplina_ID){
                var row = document.createElement("tr");
                tbody.appendChild(row);
                var td = document.createElement("td");
                row.appendChild(td);
                td.appendChild(document.createTextNode(discID.aluno_ID));
                td = document.createElement("td");
                row.appendChild(td);
                td.appendChild(document.createTextNode(discID.nota));
            }
        }

        divobj.appendChild(table);

    }
}


function StringNome(nome){ 
    //função que transforma uma String em nome próprio

    var splitNome = nome.toLowerCase().split(' ');

    for (var i = 0; i < splitNome.length; i++) 
        splitNome[i] = splitNome[i].charAt(0).toUpperCase() + splitNome[i].substring(1);  

    return splitNome.join(' '); 
}

