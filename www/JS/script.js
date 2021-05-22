function AutoID(arrays)
{
    let mx = -1;
    for(let some of arrays)
    {
        if (some.id > mx)
        {
            mx = some.id;
        }
    }
    mx++;
    return mx++;
}

class Turma{
    
    constructor (nome, ano, responsavel, emailResponsavel, curso){
        this.nome = nome
        this.ano = ano
        this.responsavel = responsavel
        this.emailResponsavel = emailResponsavel
        this.curso = curso

        this.aluno = []
        this.disciplina = []
        this.inscricao = []
    }

/*///////////////////////////////////////////////////////////////////////////////////////////// */
    addAluno(nome, dataNasc, genero, email, foto){
        if(!nome || !dataNasc || !genero || !email || !foto)
            alert("Dado(s) inválidos!")
        else if(/[0-9]/.test(nome)||/[0-9]/.test(genero))
            alert("Em nome e Genero não são aceites valorers de tipo numérico!")
        
        else{
            var id = AutoID(this.aluno)//incremento do ID

            nome = StringNome(nome);
            this.aluno.push(new Aluno(id, nome, dataNasc, genero, email, foto))
            localStorage.setItem('turma', JSON.stringify(Turmaaaa))//a key tem de ser sempre igual
        }
        
    }
    
    addDisciplina(nome, docente){
        if(!nome || !docente)
            alert("Dado(s) inválidos!")
        else if(/[0-9]/.test(nome)||/[0-9]/.test(docente))
            alert("Em nome e Genero não são aceites valorers de tipo numérico!")
        else{
            var id = AutoID(this.disciplina)//incremento do ID

            nome = StringNome(nome);
            
            this.disciplina.push(new Disciplina(id, nome, docente));
            localStorage.setItem('turma', JSON.stringify(Turmaaaa))//a key tem de ser sempre igual
        }
    }

/*///////////////////////////////////////////////////////////////////////////////////////////// */
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

/*///////////////////////////////////////////////////////////////////////////////////////////// */
    removeAluno(id){
        let index = 0;
        for(let aluno of this.aluno)
        {
            if(aluno.id == id)
                this.aluno.splice(index, 1);
            index++;
        }
        Turma.aluno.tabela('Insert_alunos');
        
        
        
        /*let contador = 0;
        for(let aluno of this.aluno){
            if(aluno.id == id){
                this.aluno.splice(contador, 1);
            }
            contador++;
        }*/

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

/*///////////////////////////////////////////////////////////////////////////////////////////// */
    showAlunos(){ //Lista os alunos

        //Limpar div
        while(document.getElementById('Insert_alunos').firstChild){
            document.getElementById('Insert_alunos').removeChild(document.getElementById('Insert_alunos').firstChild)
        }


        var tabela = document.createElement("table")
        tabela.className = "tableAlunos"

        var thead = document.createElement("thead")
        tabela.appendChild(thead)

        var row = document.createElement("tr")
        thead.appendChild(row)

        var th = document.createElement("th")
        th.appendChild(document.createTextNode("ID"))
        row.appendChild(th)

        var th = document.createElement("th")
        th.appendChild(document.createTextNode("Nome"))
        row.appendChild(th)

        th = document.createElement("th")
        th.appendChild(document.createTextNode("Data Nascimento"))
        row.appendChild(th)

        th = document.createElement("th")
        th.appendChild(document.createTextNode("Género"))
        row.appendChild(th)

        th = document.createElement("th")
        th.appendChild(document.createTextNode("E-mail"))
        row.appendChild(th)

        th = document.createElement("th")
        th.appendChild(document.createTextNode("Foto"))
        row.appendChild(th)

        // Botão de apagar
        th = document.createElement("th")
        th.appendChild(document.createTextNode("Apagar"))
       
        row.appendChild(th)
        /*/botão de editar
        
         th = document.createElement("th")
        th.appendChild(document.createTextNode("Editar"))
        row.appendChild(th)
        */

        var tbody = document.createElement("tbody")
        tabela.appendChild(tbody)

        for(let alu of this.aluno){
            var row = document.createElement("tr")
            var td = document.createElement("td")

            tbody.appendChild(row)
            
            td.appendChild(document.createTextNode(alu.id))
            row.appendChild(td)

            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.nome))
            row.appendChild(td)

            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.dataNascimento))
            row.appendChild(td)

            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.genero))
            row.appendChild(td)

            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.email))
            row.appendChild(td)

            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.foto))
            row.appendChild(td); 
            
        }
        document.getElementById('Insert_alunos').appendChild(tabela)

    }
    showDisciplina(){ //Lista as disciplinas
        while(document.getElementById('Insert_Disc').firstChild){
            document.getElementById('Insert_Disc').removeChild(document.getElementById('Insert_Disc').firstChild)
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
        th.appendChild(document.createTextNode("Disciplina"));
        th = document.createElement("th");
        row.appendChild(th);
        th.appendChild(document.createTextNode("Docente"));
        
        // Botão de apagar
        th = document.createElement("th")
        th.appendChild(document.createTextNode("Apagar"))
        row.appendChild(th)
        
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for(let disciplinas of this.disciplina){
            var row = document.createElement("tr");
            var td = document.createElement("td");
            tbody.appendChild(row);
          

            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.id));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.nome));
            td = document.createElement("td");
            row.appendChild(td);
            td.appendChild(document.createTextNode(disciplinas.docente));
        }

        document.getElementById('Insert_Disc').appendChild(table)

    }
    



    /*showTurmaDiscInscritos(divid, disciplina_ID){
        this.InscricaoDisc.showInscricoesDisc(divid, disciplina_ID);
    }

    addInscricao(disciplina_ID, aluno_ID, nota){
        if(!disciplina_ID || !aluno_ID || !nota)
            throw "Dado(s) inválidos!";

        this.inscricao.push(new InscricaoDisc(this.inscricao,length + 1, disciplina_ID, aluno_ID, nota));
    }*/
    
}

/*///////////////////////////////////////////////////////////////////////////////////////////// */
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
/*///////////////////////////////////////////////////////////////////////////////////////////// */
class Disciplina{
    constructor (id, nome, docente){
        this.id = id        
        this.nome = nome        
        this.docente = docente
    }
} 
/*///////////////////////////////////////////////////////////////////////////////////////////// */
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
/*///////////////////////////////////////////////////////////////////////////////////////////// */
function StringNome(nome){ 
    //função que transforma uma String em nome próprio

    var splitNome = nome.toLowerCase().split(' ');

    for (var i = 0; i < splitNome.length; i++) 
        splitNome[i] = splitNome[i].charAt(0).toUpperCase() + splitNome[i].substring(1);  

    return splitNome.join(' '); 
}


