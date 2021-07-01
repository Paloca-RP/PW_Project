const mysql = require("mysql")
const conexao = require("./connection.json")

function openConnectionDB(option){
    let conn = mysql.createConnection(option)
    conn.connect()
    return conn
}
/*-----------------------SHOW-----------------------------------*/
module.exports.getAluno = function (request, response) {
    let con = openConnectionDB(conexao)

    var query = "select * from aluno where aluno_id = ?"

    con.query(mysql.format(query, [request.params.aluno_id]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "showaluno": rows })
        }
    })
    con.end()
} 
module.exports.getTodosAlunos = function (request, response) {
    let con = openConnectionDB(conexao)

    var query = "select * from aluno"

    con.query(query, function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "showTodosAlunos": rows })
        }
    })
    con.end()
}
module.exports.getDisciplina = function (request, response) {
    let con = openConnectionDB(conexao)
   
    var query = "select * from disciplina where disc_id = ?"
    con.query(mysql.format(query, [request.params.disc_id]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "showdisciplina": rows })
        }
    })
    con.end()
} 
module.exports.getTodasDisciplinas = function (request, response) {
    let con = openConnectionDB(conexao)

    var query = "select * from disciplina"

    con.query(query, function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "showTodasDisciplinas": rows })
        }
    })
    con.end()
}
module.exports.getInscricao =  function (request, response) {
   let con = openConnectionDB(conexao)
   
    var query = "select fk_disciplina, fk_aluno from inscricao where fk_disciplina = ?"
    con.query(mysql.format(query, [request.params.fk_disciplina]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "showinscricao": rows })
        }
    })
    con.end()
}
module.exports.getTurma = function (request, response) {
    let con = openConnectionDB(conexao)
   
    var query = "select * from turma"

    con.query(query, function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "showturma": rows })
        }
    })
    con.end()
}
/*-----------------------Insert-----------------------------------*/
module.exports.postAluno = function (request, response) {
    let con = openConnectionDB(conexao)
   
    var query = "insert into aluno values(null, ?, ?, ?, ?, ?)"

    con.query(mysql.format(query, [request.params.aluno_nome, request.params.aluno_dataNasc, request.params.aluno_genero, request.params.aluno_email, request.params.aluno_foto]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "insertAluno": rows })
        }
    })
    con.end()
} 
module.exports.postDisciplina = function (request, response) {
    let con = openConnectionDB(conexao)
    
    console.log("TESTE")
    
    var query = "insert into disciplina values(null, ?, ?, 1)"

    con.query(mysql.format(query, [request.params.disc_nome, request.params.disc_docente]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "insertDisciplina": rows })
        }
    })
    con.end()
} 
module.exports.postInscricao = function (request, response) {
    let con = openConnectionDB(conexao)
   
    var query = "insert into inscricao values(?, ?, ?)"

    con.query(mysql.format(query, [request.params.fk_disciplina, request.params.fk_aluno, request.params.insc_obs]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "insertInscricao": rows })
        }
    })
    con.end()
}
/*-----------------------Delete-----------------------------------*/
module.exports.deleteAluno = function (request, response) {
    let con = openConnectionDB(conexao)
   
    var query = "delete from aluno where aluno_id = ?"

    con.query(mysql.format(query, [request.params.aluno_id]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "deleteAluno": rows })
        }
    })
    con.end()
}
module.exports.deleteDisciplina = function (request, response) {
    let con = openConnectionDB(conexao)
   
    var query = "delete from disciplina where disc_id = ?"

    con.query(mysql.format(query, [request.params.disc_id]), function(err, rows) {
        if (err) {
            response.json({"message": "error", "error": err })
        } else {
            response.json({"message": "success", "deleteDisciplina": rows })
        }
    })
    con.end()
} 
