const mysql = require("mysql");
const options = require("./connection.json");

function openConnectionDB(options){
    let a = mysql.createConnection(options);
    a.connect();
    return a;
}

function getAluno(req, res){
    let con = openConnectionDB(ConOption);
    var query = 
        "Select aluno_id, aluno_nome, aluno_dataNasc, aluno_genero, aluno_email, aluno_foto" +
        "From aluno"
    con.query(query, function (err, rows){
        if (err) {
            res.json({"message": "error", "error": err })
        } else {
            res.json({"message": "success", "aluno": rows })
        }
    })
    con.end();
} module.exports.getAluno = getAluno

function getDisciplina(req, res){
    let con = openConnectionDB(ConOption);
    var query = 
        "Select disc_id, disc_nome, disc_docente" +
        "From disciplina"
    con.query(query, function (err, rows){
        if (err) {
            res.json({"message": "error", "error": err })
        } else {
            res.json({"message": "success", "disciplina": rows })
        }
    })
    con.end();
} module.exports.getDisciplina = getDisciplina








/////////////////////////////////////////////////////////////////////////

function postAluno(req, res){
    let con = openConnectionDB(ConOption);
    con.end();
} module.exports.postAluno = postAluno
function postDisciplina(req, res){//
    let con = openConnectionDB(ConOption);
    con.end();
} module.exports.postDisciplina = postDisciplina

function deleteDisciplina(req, res){
    let con = openConnectionDB(ConOption);
    con.end();
} module.exports.deleteDisciplina = deleteDisciplina
