const { resolveSoa } = require("dns");
const mysql = require("mysql");
const options = require("./connection-options.json");

/**
 * Função para retornar a lista de pessoas da BD.
 * @param {*} req 
 * @param {*} res 
 */

//funçoes do programa
function getAlunos(req, res){
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT aluno_id, aluno_nome, aluno_dataNasc, aluno_genero, aluno_email, aluno_foto FROM aluno";
    connection.query(query, function (err, rows){
        if(err){
            res.json({"message": "error", "error": err});
        } else {
            res.json({"message": "success", "person": rows});
        }
    });
}
function getTurma(req, res){
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT turma_id, turma_nome, turma_ano, turma_responsavel, turma_emailResponsalvel, curso FROM turma";
    connection.query(query, function (err, rows){
        if(err){
            res.json({"message": "error", "error": err});
        } else {
            res.json({"message": "success", "person": rows});
        }
    });
}

function getDisciplina(req, res){
    var connection = mysql.createConnection(options);
    connection.connect();
    var query = "SELECT disc_id, disc_nome, disc_docente FROM disciplina";
    connection.query(query, function (err, rows){
        if(err){
            res.json({"message": "error", "error": err});
        } else {
            res.json({"message": "success", "person": rows});
        }
    });
}

module.exports.getAlunos = getAlunos;
module.exports.getTurma = getTurma;
module.exports.getDisciplina = getDisciplina;