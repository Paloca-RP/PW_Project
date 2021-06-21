const { table } = require("console");

window.onload = function (event){
    var info = new Information("");
    info.getAlunos();
    info.getTurma();
    info.getDisciplina();
    window.info = info;
};

function replaceChilds(id, newSon){
    var no = document.getElementById(id);
    while (no.hasChildNodes()){
        no.removeChild(no.lastChild);
    }
    no.appendChild(newSon);
};

function tableLine(object, headerFormat){
    var tr = document.createElement("tr");
    var tableCell = null;
    for(var property in object){
        if ((object[property] instanceof Function))
            continue;
        if (headerFormat){
            tableCell = document.createElement("th");
            tableCell.textContent = property[0].toUpperCase() + property.substr(1, property.length - 1);
        } else {
            tableCell = document.createElement("td");
            tableCell.textContent = object[property];
        }
        tr.appendChild(tableCell);
    }
    return tr;
}