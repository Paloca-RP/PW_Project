window.onload = function() {
    getTodosAlunos()
    getTodosDisciplinas()  
    getTurma()
}
function EliminarDisciplinas(tabela)
{
    var contador = 1

    for(let row of tabela.children) {
        if(contador != 1)
        {
            row.children[3].onclick = function(){
                http("DELETE", "/deleteDisciplina/" + row.getAttribute("value"), function(obj){
                    if(obj.error) {
                        throw obj.error
                    }
                    alert("Eliminado !")

                    getTodosDisciplinas()
                })
            }
        }
        contador = 0
    }
}
function EliminarAlunos(tabela) {
    var contador = 1

    for (let row of tabela.children) { 
        if (contador != 1) {
            row.children[6].onclick = function() {
                http("DELETE", "/deleteAluno/" + row.getAttribute("value"), function(obj){
                    if (obj.error) {
                        throw obj.error
                    }
                    alert("Eliminado !!")
                    getTodosAlunos()
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
        while (document.getElementById("Insert_alunos").firstChild) {
            document.getElementById("Insert_alunos").removeChild(document.getElementById("Insert_alunos").firstChild)
        }
        
        var table = document.createElement("table") //cabeçalho da table
        table.appendChild(tableLine({"ID" : 0,"Nome" : 0, "Data Nascimento" : 0, "Género" : 0, "Email" : 0, "Foto" : 0, "Apagar" : 0}, true))
        
        for (let showAluno of obj.showTodosAlunos) {
            var aluno_id = showAluno.aluno_id
            var aluno_nome = showAluno.aluno_nome
            var aluno_dataNasc = showAluno.aluno_dataNasc
            var aluno_genero = showAluno.aluno_genero
            var aluno_email = showAluno.aluno_email
            var aluno_foto = showAluno.aluno_foto

            var deleteBTN = document.createElement("img") 
                deleteBTN.src = "../Images/apagar.png"
            
            var tr = tableLine ({
                "ID" : aluno_id,
                "Nome" : aluno_nome,
                "Data Nascimento" : aluno_dataNasc, 
                "Género" : aluno_genero, 
                "E-mail" : aluno_email, 
                "Foto" : aluno_foto,
                "Apagar" : "" }, false)
            
            tr.setAttribute("value", aluno_id)
            tr.lastElementChild.appendChild(deleteBTN)
            table.appendChild(tr)
        }

        table.onload = EliminarAlunos(table)
        document.getElementById("Insert_alunos").appendChild(table)
    })
}
function getTodosDisciplinas() { 
    http("GET", "/getTodasDisciplinas", function(obj) {
        if (obj.error) {
            throw obj.error
        }

        while(document.getElementById("Insert_Disc").firstChild) {
            document.getElementById("Insert_Disc").removeChild(document.getElementById("Insert_Disc").firstChild)
        }

<<<<<<< Updated upstream
        var table = document.createElement('table')
        table.appendChild(tableLine({"ID" : 0, "Disciplina":0, "Docente":0, "Apagar":0}, true))
=======
        var table = document.createElement('table');
        table.appendChild(tableLine({"ID" : 0, "Disciplina":0, "Docente":0, "Apagar":0}, true));
>>>>>>> Stashed changes

        for (let showDisciplina of obj.showTodasDisciplinas) {
            var disc_id = showDisciplina.disc_id
            var disc_nome = showDisciplina.disc_nome
            var disc_docente = showDisciplina.disc_docente 

            var deleteBTN = document.createElement("img") 
                deleteBTN.src = "../Images/apagar.png"
            
            var tr = tableLine ({
                "ID" : disc_id,
                "Nome" : disc_nome,
                "Docente" : disc_docente,
                "Apagar" : "" }, false)
            
            tr.setAttribute("value", disc_id)
            tr.lastElementChild.appendChild(deleteBTN)
            table.appendChild(tr)
        }

        table.onload = EliminarDisciplinas(table)
        document.getElementById("Insert_Disc").appendChild(table)        
    })
}
function getTurma() {
    http("GET", "/getTurma", function(obj) {
        if(obj.error) {
            throw obj.error
        }

        for (let showTurma of obj.showturma) {
            var turma_nome = showTurma.turma_nome
            var turma_ano = showTurma.turma_ano
            var turma_responsavel = showTurma.turma_responsavel
            var curso = showTurma.curso

            if (document.querySelector("body > h3.turma_Nome").innerHTML == "") {
                document.querySelector("body > h3").innerHTML = "Turma: " + turma_nome + turma_ano + " Curso: " + curso + " Professor: " + turma_responsavel  
            }
        }
    })
}
<<<<<<< Updated upstream
document.querySelector("button.ModallADDaluno").onclick = function() {
    var add = document.getElementById("add_aluno")

    add.children[21].onclick = function() {
        var aluno_nome = add.children[2]
        var aluno_dataNasc = add.children[6] 
        var aluno_genero = add.children[10] 
        var aluno_email = add.children[14] 
        var aluno_foto = add.children[18]

        http("POST", "/postAluno/" + aluno_nome.value + "/" + aluno_dataNasc.value + "/" + aluno_genero.value + "/" + aluno_email.value + "/" + aluno_foto.value, function(obj){
=======
document.querySelector("button.ModallADDDisc").onclick = function() {
    var add = document.getElementById("addDisciplina")
        
    add.children[8].onclick = function() { 
        var nome_disc = add.children[1]
        var docente_disc = add.children[5]
        console.log("test")
        http("POST", "/postDisciplina/" + nome_disc.value + "/" + docente_disc.value, function(obj) {
>>>>>>> Stashed changes
            if(obj.error) {
                throw obj.error
            }

            for(let aux of add.children[0].children) {
                aux.value = ""
            }
            alert("Aluno adicionado")

            getTodosAlunos()
        })
    }
<<<<<<< Updated upstream
=======
}
document.querySelector('button.ModallAluDisc').onclick = function() {
    var add = document.getElementById("add_aluDIsC")
    
    add.children[12].onclick = function() {
        var fk_disciplina = add.children[1]
        var fk_aluno = add.children[5]
        var obs = add.children[9]

        http("POST", "/postInscricao/" + fk_disciplina.value + "/" + fk_aluno.value + "/" + obs.value, function(obj) {
            if(obj.error)
            {
                alert("Done !")
                throw obj.error
            }
            alert('Aluno inscrito com sucesso!')
        })
    }
}
document.querySelector("button.ModallADDaluno").onclick = function() {
    var add = document.getElementById("add_aluno")

    add.children[21].onclick = function() {
        var aluno_nome = add.children[2]
        var aluno_dataNasc = add.children[6] 
        var aluno_genero = add.children[10] 
        var aluno_email = add.children[14] 
        var aluno_foto = add.children[18]
>>>>>>> Stashed changes

}
document.querySelector("button.ModallADDDisc").onclick = function() {
    var add = document.getElementById("addDisciplina")
        
    add.children[8].onclick = function() { 
        var nome_disc = add.children[1]
        var docente_disc = add.children[5]
        console.log("test")
        http("POST", "/postDisciplina/" + nome_disc.value + "/" + docente_disc.value, function(obj) {
            if(obj.error) {
                throw obj.error
            }

            for(let aux of add.children[0].children) {
                aux.value = ""
            }
            alert("Disciplina Adicionada!")
            getTodosDisciplinas()
        })
    }
}
<<<<<<< Updated upstream
document.querySelector('button.ModallAluDisc').onclick = function() {
    var add = document.getElementById("add_aluDIsC")
    
    add.children[12].onclick = function() {
        var fk_disciplina = add.children[1]
        var fk_aluno = add.children[5]
        var obs = add.children[9]

        http("POST", "/postInscricao/" + fk_disciplina.value + "/" + fk_aluno.value + "/" + obs.value, function(obj) {
            if(obj.error)
            {
                alert("Done !")
                throw obj.error
            }
            alert("Aluno inscrito com sucesso!")
        })
    }
}
function EliminarDisciplinas(tabela)
{
    var contador = 1

    for(let row of tabela.children) {
        if(contador != 1)
        {
            row.children[3].onclick = function(){
                http("DELETE", "/deleteDisciplina/" + row.getAttribute("value"), function(obj){
                    if(obj.error) {
                        throw obj.error
                    }
                    alert("Eliminado !")

                    getTodosDisciplinas()
                })
            }
        }
        contador = 0
    }
}
function EliminarAlunos(tabela) {
    var contador = 1

    for (let row of tabela.children) { 
        if (contador != 1) {
            row.children[6].onclick = function() {
                http("DELETE", "/deleteAluno/" + row.getAttribute("value"), function(obj){
                    if (obj.error) {
                        throw obj.error
                    }
                    alert("Eliminado !!")
                    getTodosAlunos()
                })
            }
        }
        contador = 0
    }    
}
=======
>>>>>>> Stashed changes
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