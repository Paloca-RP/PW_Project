window.onload = function(event) {
    getTodosAlunos()
    getTodosDisciplinas()   
}

function getTodosAlunos() {
    http("GET", "/getTodosAlunos", function(obj) {
        if (obj.error) {
            throw obj.error
        }
        for (let aux of obj.showTodosAlunos) {
            aux.aluno_dataNasc = aux.aluno_dataNasc.split("T")[0]
        }
        while (document.getElementById("Insert_alunos1").firstChild) {
            document.getElementById("Insert_alunos1").removeChild(document.getElementById("Insert_alunos1").firstChild)
        }
        
        var table = document.createElement("table") //cabeçalho da table
        table.appendChild(tableLine({"ID" : 0,"Nome" : 0, "Data Nascimento" : 0, "Género" : 0, "Email" : 0, "Foto" : 0}, true))
        
        for (let showAluno of obj.showTodosAlunos) {
            var aluno_id = showAluno.aluno_id
            var aluno_nome = showAluno.aluno_nome
            var aluno_dataNasc = showAluno.aluno_dataNasc
            var aluno_genero = showAluno.aluno_genero
            var aluno_email = showAluno.aluno_email
            var aluno_foto = showAluno.aluno_foto

            var tr = tableLine ({
                "ID" : aluno_id,
                "Nome" : aluno_nome,
                "Data Nascimento" : aluno_dataNasc, 
                "Género" : aluno_genero, 
                "E-mail" : aluno_email, 
                "Foto" : aluno_foto }, false)
            
            tr.setAttribute("value", aluno_id)
            table.appendChild(tr)
        }
        document.getElementById("Insert_alunos1").appendChild(table)
    })
}
function getTodosDisciplinas() { 
    http("GET", "/getTodasDisciplinas", function(obj) {
        if (obj.error) {
            throw obj.error
        }

        while(document.getElementById("Insert_Disc1").firstChild) {
            document.getElementById("Insert_Disc1").removeChild(document.getElementById("Insert_Disc1").firstChild)
        }

        var table = document.createElement('table');
        table.appendChild(tableLine({"ID" : 0, "Disciplina":0, "Docente":0}, true))

        for (let showDisciplina of obj.showTodasDisciplinas) {
            var disc_id = showDisciplina.disc_id
            var disc_nome = showDisciplina.disc_nome
            var disc_docente = showDisciplina.disc_docente 

            var tr = tableLine ({
                "ID" : disc_id,
                "Nome" : disc_nome,
                "Docente" : disc_docente}, false)
            
            tr.setAttribute("value", disc_id)
            table.appendChild(tr)
        }
        console.log("adasda")
        table.onload = pintar(table)
        document.getElementById("Insert_Disc1").appendChild(table)        
    })
}
function pintar(tabela){
    
    var contador = 1

    for(let row of tabela.children) {
        if(contador != 1) {
            row.onclick = function(){
                http("GET", "/getInscricao/" + row.getAttribute("value"), function(obj){
                    if(obj.error) {
                        throw obj.error
                    }
                        // repor cor
                    for(let aluno of document.getElementById('Insert_alunos1').firstElementChild.children) {
                        aluno.style.backgroundColor = "#414040"
                    }

                    //caso o aluno esteja inscrito
                    for(let inscricoes of obj.showinscricao) {
                        for(let aluno of document.getElementById('Insert_alunos1').firstElementChild.children) {
                              
                            if(aluno.firstElementChild.innerText == inscricoes.fk_aluno) {
                                console.log(aluno.firstElementChild)
                                aluno.style.backgroundColor = "#ff0000"
                            }                       
                                                 
                        }
                    }
                })
            }
        }
        contador = 0
    }
}
function getTodosAlunos() {
    http("GET", "/getTodosAlunos", function(obj) {
        if (obj.error) {
            throw obj.error
        }
        for (let aux of obj.showTodosAlunos) {
            aux.aluno_dataNasc = aux.aluno_dataNasc.split("T")[0]
        }
        while (document.getElementById("Insert_alunos1").firstChild) {
            document.getElementById("Insert_alunos1").removeChild(document.getElementById("Insert_alunos1").firstChild)
        }
        
        var table = document.createElement("table") //cabeçalho da table
        table.appendChild(tableLine({"ID" : 0,"Nome" : 0, "Data Nascimento" : 0, "Género" : 0, "Email" : 0, "Foto" : 0}, true))
        
        for (let showAluno of obj.showTodosAlunos) {
            var aluno_id = showAluno.aluno_id
            var aluno_nome = showAluno.aluno_nome
            var aluno_dataNasc = showAluno.aluno_dataNasc
            var aluno_genero = showAluno.aluno_genero
            var aluno_email = showAluno.aluno_email
            var aluno_foto = showAluno.aluno_foto

            var tr = tableLine ({
                "ID" : aluno_id,
                "Nome" : aluno_nome,
                "Data Nascimento" : aluno_dataNasc, 
                "Género" : aluno_genero, 
                "E-mail" : aluno_email, 
                "Foto" : aluno_foto }, false)
            
            tr.setAttribute("value", aluno_id)
            table.appendChild(tr)
        }
        document.getElementById("Insert_alunos1").appendChild(table)
    })
}
function getTodosDisciplinas() { 
    http("GET", "/getTodasDisciplinas", function(obj) {
        if (obj.error) {
            throw obj.error
        }

        while(document.getElementById("Insert_Disc1").firstChild) {
            document.getElementById("Insert_Disc1").removeChild(document.getElementById("Insert_Disc1").firstChild)
        }

        var table = document.createElement('table');
        table.appendChild(tableLine({"ID" : 0, "Disciplina":0, "Docente":0}, true));

        for (let showDisciplina of obj.showTodasDisciplinas) {
            var disc_id = showDisciplina.disc_id
            var disc_nome = showDisciplina.disc_nome
            var disc_docente = showDisciplina.disc_docente 

            var tr = tableLine ({
                "ID" : disc_id,
                "Nome" : disc_nome,
                "Docente" : disc_docente}, false)
            
            tr.setAttribute("value", disc_id)
            table.appendChild(tr)
        }
        console.log("adasda")
        table.onload = pintar(table)
        document.getElementById("Insert_Disc1").appendChild(table)        
    })
}
function tableLine(object, headerFormat) {
    var tr = document.createElement("tr")
    var tableCell = null
    for (var property in object) {
        if ((object[property] instanceof Function))
            continue;
        if (headerFormat) {
            tableCell = document.createElement("th")
            tableCell.textContent = property[0].toUpperCase() + property.substr(1, property.length - 1)
        } else {
            tableCell = document.createElement("td")
            tableCell.textContent = object[property]
        }
        tr.appendChild(tableCell)
    }
    return tr
}
function http(type, url, callback) {
    let xhttp = new XMLHttpRequest()
    xhttp.open(type, url)
    xhttp.responseType = "json"

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.response)
        }      
    }
    xhttp.send()
}