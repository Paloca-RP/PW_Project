class InscricaoDisc{
    constructor(id, disciplina_ID, aluno_ID, nota){
        this.id = id        
        this.disciplina_ID = disciplina_ID
        this.aluno_ID = aluno_ID
        this.nota = nota
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

    
getAluno() {
    /*let aux = this.aluno;
    HTTPRequest("get", "Aluno", function(res) {
        for (let x of res.aluno)
            this.aluno.push( new Aluno(x.id, x.nome, x.dataNasc, x.genero, x.email, x.foto))
    
    )*/

        let aux = this.aluno
        HTTPRequest("GET", "aluno", function(obj){
            for (let aluno of obj.aluno){
                let newAluno = [];
                for (let prp in person)
                    newAluno.push(aluno[prp])
                aux.push(new Aluno(...newAluno))
            }
        })
        this.aluno = aux
}

getDisciplina () {
    this.disciplina = []
    HTTPRequest("/GET", "/getDisciplina", function(res) {
        for (let x of res.disciplina)
            this.disciplina.push( new Disciplina(x.id, x.nome, x.docente))
    }
)}



/*///////////////////////////////////////////////////////////////////////////////////////////// */
    addAluno(nome, dataNasc, genero, email, foto){
        if(!nome || !dataNasc || !genero || !email || !foto)
            alert("Dado(s) inválidos!")
        else if(/[0-9]/.test(nome)||/[0-9]/.test(genero))
            alert("Em nome e Genero não são aceites valorers de tipo numérico!")
        else{
            var id = AutoID(this.aluno)//incremento do ID
            nome = StringNome(nome)
            this.aluno.push(new Aluno(id, nome, dataNasc, genero, email, foto))
            localStorage.setItem('turma', JSON.stringify(Turmaaaa))//a key tem de ser sempre igual
        }
    }
    addDisciplina(nome, docente){
        if(!nome || !docente)
            alert("Dado(s) inválidos!")
        else if(/[0-9]/.test(docente))
            alert("Em nome e Genero não são aceites valorers de tipo numérico!")
        else{
            var id = AutoID(this.disciplina)//incremento do ID
            nome = StringNome(nome)
            docente = StringNome(docente)
            this.disciplina.push(new Disciplina(id, nome, docente))
            localStorage.setItem('turma', JSON.stringify(Turmaaaa))//a key tem de ser sempre igual
        }
    }
    addInscricao(dicID, alunoID, nota){
        var id = AutoID(this.inscricao)
        var verificacao = false
        for(var i=0;i<this.inscricao.length;i++){
            if(this.inscricao[i].aluno_ID == alunoID){    
               if(this.inscricao[i].disciplina_ID == dicID){
                    verificacao = true
                    break
                }
            }
        }
        if(verificacao == true){
            alert("O aluno esta inscrito na disciplina !!")
        }else{
            //incremento do ID
            this.inscricao.push(new InscricaoDisc(id, dicID, alunoID, nota))
            localStorage.setItem('turma', JSON.stringify(Turmaaaa))     
        }
    }
/*///////////////////////////////////////////////////////////////////////////////////////////// */
    removeAluno(id){
        let index = 0
        for(let aluno of this.aluno){
            if(aluno.id == id)
                this.aluno.splice(index, 1)
            index++;
        }
        localStorage.setItem('turma', JSON.stringify(Turmaaaa))        
    }
    removeDisciplina(id){
        let contador = 0;
        for(let disciplina of this.disciplina){
            if(disciplina.id == id){
                this.disciplina.splice(contador, 1)
            }
            contador++;
        }
        localStorage.setItem('turma', JSON.stringify(Turmaaaa))
    }
    removeInscricao(dicID, alunoID){
        var verificacao = false
        for(var i=0;i<this.inscricao.length;i++){
            if(this.inscricao[i].aluno_ID == alunoID){    
               if(this.inscricao[i].disciplina_ID == dicID){
                    verificacao = true
                    break
                }
            }
        }
        if(verificacao == true){

            this.inscricao.splice(i, 1)
            localStorage.setItem('turma', JSON.stringify(Turmaaaa))
            
        }else{
           alert("O aluno nao esta inscrito na disciplina !!")
        }
    }
/*///////////////////////////////////////////////////////////////////////////////////////////// */
    showAlunos(){ //Lista os alunos
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
        th = document.createElement("th")
        th.appendChild(document.createTextNode("Apagar"))
            row.appendChild(th) 
        var tbody = document.createElement("tbody")
        tabela.appendChild(tbody)
        var turmaa = this
        for(let alu of this.aluno){
            var row = document.createElement("tr")
            var td = document.createElement("td")
            var btn = document.createElement("button")         
            btn.innerHTML = "<img src='Images/apagar.png' alt='add'>"          
            btn.onclick = function(){//função anonima              
                console.log(alu.id)
                turmaa.removeAluno(alu.id) 
                turmaa.showAlunos()
            }
            tbody.appendChild(row)
            td.appendChild(document.createTextNode(alu.id))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.nome))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.dataNasc))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.genero))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.email))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.foto))
            row.appendChild(td)           
            td = document.createElement("td")
            row.appendChild(td)
            td.appendChild(btn)
        }
        document.getElementById('Insert_alunos').appendChild(tabela)
    }

    showDisciplina(){ //Lista as disciplinas
        while(document.getElementById('Insert_Disc').firstChild){
            document.getElementById('Insert_Disc').removeChild(document.getElementById('Insert_Disc').firstChild)
        }
        var tabela = document.createElement("table")
        tabela.className = "table"
        var thead = document.createElement("thead")
        tabela.append(thead)
        var row = document.createElement("tr")
        thead.appendChild(row)
        var th = document.createElement("th")
        row.appendChild(th)
        th.appendChild(document.createTextNode("Id"))
        th = document.createElement("th")
        row.appendChild(th)
        th.appendChild(document.createTextNode("Disciplina"))
        th = document.createElement("th")
        row.appendChild(th);
        th.appendChild(document.createTextNode("Docente"))  
        th = document.createElement("th")
        th.appendChild(document.createTextNode("Apagar"))
        row.appendChild(th)   
        var tbody = document.createElement("tbody")
        tabela.appendChild(tbody)
        var turma = this
        for(let disciplina of this.disciplina){
            var row = document.createElement("tr")
            var td = document.createElement("td")        
            var btn = document.createElement("button")            
            btn.innerHTML = "<img src='Images/apagar.png' alt='add'>"   
            btn.onclick = function(){//função anonima              
                turma.removeDisciplina(disciplina.id) 
                turma.showDisciplina()
            }
            tbody.appendChild(row)
            row.appendChild(td)
            td.appendChild(document.createTextNode(disciplina.id))
            td = document.createElement("td")
            row.appendChild(td)
            td.appendChild(document.createTextNode(disciplina.nome))
            td = document.createElement("td")
            row.appendChild(td)
            td.appendChild(document.createTextNode(disciplina.docente))       
            td = document.createElement("td");
            row.appendChild(td)
            td.appendChild(btn)
        }
        document.getElementById('Insert_Disc').appendChild(tabela)
    }   

    infoshowAlunos(){ //Lista os alunos
        while(document.getElementById('Insert_alunos1').firstChild){
            document.getElementById('Insert_alunos1').removeChild(document.getElementById('Insert_alunos1').firstChild)
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
        var tbody = document.createElement("tbody")
        tabela.appendChild(tbody)        
        for(let alu of this.aluno){
            var row = document.createElement("tr")
            var td = document.createElement("td")
            row.setAttribute("id", alu.id)//dar set do id do aluno para dar o valor de indez igual ao vcalor do aluno
           
            tbody.appendChild(row)
            td.appendChild(document.createTextNode(alu.id))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.nome))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.dataNasc))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.genero))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.email))
            row.appendChild(td)
            td = document.createElement("td")
            td.appendChild(document.createTextNode(alu.foto))
            row.appendChild(td)           
        }
        document.getElementById('Insert_alunos1').appendChild(tabela)
    }

    infoshowDisciplina(){ //Lista as disciplinas
        while(document.getElementById('Insert_Disc1').firstChild){
            document.getElementById('Insert_Disc1').removeChild(document.getElementById('Insert_Disc1').firstChild)
        }
        var tabela = document.createElement("table")
        tabela.className = "table"
        var thead = document.createElement("thead")
        tabela.append(thead)
        var row = document.createElement("tr")
        thead.appendChild(row)
        var th = document.createElement("th")
        row.appendChild(th)
        th.appendChild(document.createTextNode("Id"))
        th = document.createElement("th")
        row.appendChild(th)
        th.appendChild(document.createTextNode("Disciplina"))
        th = document.createElement("th")
        row.appendChild(th);
        th.appendChild(document.createTextNode("Docente"))        
        var tbody = document.createElement("tbody")
        tabela.appendChild(tbody)
        for(let disciplina of this.disciplina){
            
            var row = document.createElement("tr")
            row.onclick = (event) => {
                //Retirrar valores da tabela
                var tr = event.target.parentElement                                   
                var data = Array.from(tr.children).map(function(element){
                    return element.innerText                       
                })
                var discID = data[0]
                for(let aluno of this.aluno){
                    document.getElementById(aluno.id).style.backgroundColor = ""
                }
             //ve se esta o aluno inscrito  e dá uma nova background aos alunos que estão na discipolina
                for(let inscricao of this.inscricao){                                     
                    if(inscricao.disciplina_ID == discID){
                        for(let aluno of this.aluno){
                            if(inscricao.aluno_ID == aluno.id){
                                document.getElementById(aluno.id).style.backgroundColor = "#ff0000"
                            }
                        }
                    }
                }
            }
            var td = document.createElement("td")   
            tbody.appendChild(row)
            row.appendChild(td)
            td.appendChild(document.createTextNode(disciplina.id))
            td = document.createElement("td")
            row.appendChild(td)
            td.appendChild(document.createTextNode(disciplina.nome))
            td = document.createElement("td")
            row.appendChild(td)
            td.appendChild(document.createTextNode(disciplina.docente))       
            td = document.createElement("td");
        }
        document.getElementById('Insert_Disc1').appendChild(tabela)
    }
}

/*///////////////////////////////////Letras Maiusculas////////////////////////////////////////////////////// */
function StringNome(nome){     
    var splitNome = nome.toLowerCase().split(' ')//função que transforma uma String em nome próprio
    for (var i = 0; i < splitNome.length; i++) 
        splitNome[i] = splitNome[i].charAt(0).toUpperCase() + splitNome[i].substring(1) 
    return splitNome.join(' ')
}
function StringDocente(docente){     
    var splitNome = docente.toLowerCase().split(' ')//função que transforma uma String em nome próprio
    for (var i = 0; i < splitNome.length; i++) 
        splitNome[i] = splitNome[i].charAt(0).toUpperCase() + splitNome[i].substring(1) 
    return splitNome.join(' ')
}
/*///////////////////////////////////////////////////////////////////////////////////////////// */
//js da navbar
function openNav() {
    document.getElementById("navbar").style.width = "100%";
  }  
function closeNav() {
    document.getElementById("navbar").style.width = "0%";
  }
//---------------------------------------------------------------  
function AutoID(arrays){
    let mx = -1
    for(let some of arrays) {
        if (some.id > mx){
            mx = some.id
        }
    }
    mx++
    return mx++
}
////////////////////////////////////////////////////////////////////
