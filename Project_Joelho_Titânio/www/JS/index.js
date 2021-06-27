window.onload = function(event) {
    getTodosAlunos();
    getTodosDisciplinas();    
    getTurma();
}

function getTodosAlunos() {
    http("GET", "/getTodosAlunos", function(obj) {
        if (obj.error) {
            throw obj.error
        }
        for (let aux of obj.getTodosaluno) {
            aux.aluno_dataNasc = aux.aluno_dataNasc.split("T")[0]
        }
        while (document.getElementById("Insert_alunos")) {
            document.getElementById("Insert_alunos").removeChild(document.getElementById("Insert_alunos".firstChild))
        }
        
        var table = document.createElement("table") //cabeçalho da table
        table.appendChild(createTableLine({"Nome" : 0, "Data Nascimento" : 0, "Género" : 0, "Email" : 0, "Foto" : 0, "Apagar" : 0}, true))
        
        for (let ShowAluno of obj.getTodosaluno) {
            var aluno_id = getTodosaluno.aluno_id
            var aluno_nome = getTodosaluno.aluno_nome
            var aluno_dataNasc = getTodosaluno.aluno_dataNasc
            var aluno_genero = getTodosaluno.aluno_genero
            var aluno_email = getTodosaluno.aluno_email
            var aluno_foto = getTodosaluno.aluno_foto

            var deleteBTN = document.createElement("img") 
                deleteBTN.src = "../Images/apagar.png"
            
            var tr = tableLine ({
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
        document.getElementById("getTodosAlunos").appendChild(table)
    })
}

function EliminarAlunos(tabela) {
    var contador = 1

    for (let row of tabela.children) { 
        if (contador != 1) {
            row.children[5].onclick = function() {
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

function getTodosDisciplinas() { 
    http("GET", "/getTodasDisciplinas", function(obj) {
        if (obj.error) {
            throw obj.error
        }

        while(document.getElementById("Insert_Disc").firstChild) {
            document.getElementById("Insert_Disc").removeChild(document.getElementById("Insert_disc").firstChild)
        }

        var table = document.createElement('table');
        table.appendChild(createTableLine({"Disciplina":0, "Docente":0, "Apagar":0}, true));

        for (let showDisciplina of obj.getTodasdisciplina) {
            var disc_id = getTodasdisciplina.disc_id
            var disc_nome = getTodasdisciplina.disc_nome
            var disc_docente = getTodasdisciplina.disc_docente 

            var deleteBTN = document.createElement("img") 
                deleteBTN.src = "../Images/apagar.png"
            
            var tr = tableLine ({
                "Nome" : disc_nome,
                "Docente" : disc_docente,
                "Apagar" : "" }, false)
            
            tr.setAttribute("value", disc_id)
            tr.lastElementChild.appendChild(deleteBTN)
            table.appendChild(tr)
        }

        table.onload = EliminarDiscplinas(table)
        document.getElementById("getTodosDisciplinas").appendChild(table)        
    })
}

function EliminarDisciplinas(tabela)
{
    var counter = 1;

    for(let linha of tabela.children)
    {
        if(counter != 1)
        {
            row.children[2].onclick = function(){
                RequestHTTPOrders("DELETE", "/deleteDisciplina/" + row.getAttribute("value"), function(obj){
                    if(obj.error)
                    {
                        throw obj.error;
                    }

                    alert("Eliminado !");

                    carregarDisciplinas();
                });
            }
        }
        counter = 0;
    }
}

function getTurma() {
    http("GET", "/getTurma", function(obj) {
        if(obj.error) {
            throw obj.error
        }

        for (let showTurma of obj.getturma) {
            var turma_nome = showTurma.turma_nome
            var turma_ano = showTurma.turma_ano
            var turma_responsavel = showTurma.turma_responsavel
            var curso = showTurma.curso

            if (document.querySelector("body > h3.turma_Nome").innerHTML == "") {
                document.querySelector("body > h3").innerHTML = "Turma: " + turma_nome + turma_ano + "Curso: " + curso + "Professor: " + turma_responsavel  
            }
        }
    })
}

document.querySelector("button.ModallADDDisc").onclick = function() {
    var add = document = document.getElementById("addDisciplina")

    add.firstElementChild.children[5].onclick = function() { 
        var nome_disc = add.firstElementChild.children[2]
        var docente_disc = add.firstElementChild.children[4]

        http("POST", "/postDisciplina/" + nome_disc,value + "/" + docente_disc.value, function(obj) {
            if(obj.error) {
                throw obj.error;
            }

            for(let aux of add.children[0].children) {
                aux.value = "";
            }
            alert("Done!")
            getTodosDisciplinas()
        })
    }
}

document.querySelector("button.ModallADDaluno").onclick = function() {
    var add = document.getElementById('addAluno')

    add.firstElementChild.children[11].onclick = function() {
        console
        var aluno_nome = add.firstElementChild.children[2];
        var aluno_dataNasc = add.firstElementChild.children[4]; 
        var aluno_genero = add.firstElementChild.children[6]; 
        var aluno_email = add.firstElementChild.children[8]; 
        var aluno_foto = add.firstElementChild.children[10]; 

        RequestHTTPOrders("POST", "/postAluno/" + aluno_nome.value + "/" + aluno_dataNasc.value + "/" + aluno_genero.value + "/" + aluno_email.value + "/" + aluno_foto.value, function(obj){
            if(obj.error) {
                throw obj.error
            }

            for(let aux of add.children[0].children) {
                aux.value = ""
            }
            alert('Aluno adicionado com sucesso!')

            carregarAlunos()
        })
    }

}
document.querySelector('button.inscreverAluDisc').onclick = function() {
    var inscreverAlu = document.getElementById('inscreverAlu');
    var modalInscreverClose = document.getElementById('modalInscreverClose');

    modalInscreverClose.onclick = function() {
        for(let aux of inscreverAlu.children[0].children) {
            if(aux.nodeName == "SELECT")
            {
                while(aux.lastChild) {
                    aux.removeChild(x.lastChild);
                }

                var option = document.createElement('option');
                option.innerText = "Escolha uma opção";
                aux.appendChild(option);
            }
            else {
                aux.value = ""
            }
        }
    }

    RequestHTTPOrders("GET", "/getAlunos", function(obj) {
        if(obj.error) {
            throw obj.error
        }
        
        for(let alunos of obj.alunos) {
            var option = document.createElement('option')

            option.setAttribute('value', alunos.aluno_id)
            option.innerText = alunos.aluno_nome

            document.getElementById('InscreverAlunoID').appendChild(option)
        }
    })

    RequestHTTPOrders("GET", "/getDisciplinas", function(obj) {
        if(obj.error) {
            throw obj.error
        }

        for(let disciplinas of obj.disciplinas) {
            var option = document.createElement('option')

            option.setAttribute("value", disciplinas.disc_id)
            option.innerText = disciplinas.disc_nome

            document.getElementById("InscreverDiscID").appendChild(option)
        }
    })

    inscricao.firstElementChild.children[7].onclick = function() {
        var fk_disciplina = inscricao.firstElementChild.children[4]
        var fk_aluno = inscricao.firstElementChild.children[2]
        var Obs = inscricao.firstElementChild.children[6]

        RequestHTTPOrders("POST", "/postInscricao/" + fk_disciplina.value + "/" + fk_aluno.value + "/" + Obs.value, function(obj) {
            if(obj.error)
            {
                alert("Done !")
                throw obj.error
            }
            alert('Aluno inscrito com sucesso!')
        })
    }
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