window.onload = function(event) {
    getTodosAlunos();
    getTodosDisciplinas();   
}

function xx(tabela)
{
    var counter = 1;

    for(let linha of tabela.children)
    {
        if(counter != 1)
        {
            linha.onclick = function(){
                RequestHTTPOrders("GET", "/getInscricao/" + linha.getAttribute("value"), function(obj){
                    if(obj.error)
                    {
                        throw obj.error;
                    }

                    for(let aluno of document.getElementById('alunos').firstElementChild.children)
                    {
                        aluno.style.backgroundColor = "#202124";
                    }

                    for(let inscricoes of obj.inscricoes)
                    {
                        for(let aluno of document.getElementById('alunos').firstElementChild.children)
                        {
                            if(aluno.getAttribute("value") == inscricoes.fk_aluno)
                            {
                                aluno.style.backgroundColor = "#007BA7";
                            }
                                                        
                        }
                    }
                });
            }
        }
        counter = 0;
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