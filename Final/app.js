const express = require("express")
const requestHandlers = require("./scripts/request-handlers.js")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("www"))

/*-----------------------SHOW-----------------------------------*/
app.get("/getAluno/:aluno_id", requestHandlers.getAluno)
app.get("/getTodosAlunos", requestHandlers.getTodosAlunos)
app.get("/getDisciplina/:disc_id", requestHandlers.getDisciplina)
app.get("/getTodasDisciplinas", requestHandlers.getTodasDisciplinas)
app.get("/getInscricao/:fk_disciplina", requestHandlers.getInscricao)
app.get('/getTurma', requestHandlers.getTurma);
/*-----------------------Insert-----------------------------------*/
app.post("/postAluno/:aluno_nome/:aluno_dataNasc/:aluno_genero/:aluno_email/:aluno_foto", requestHandlers.postAluno)
app.post("/postDisciplina/:disc_nome/:disc_docente", requestHandlers.postDisciplina)
app.post("/postInscricao/:fk_disciplina/:fk_aluno/:insc_obs", requestHandlers.postInscricao)
/*-----------------------Delete-----------------------------------*/
app.delete("/deleteAluno/:aluno_id", requestHandlers.deleteAluno)
app.delete("/deleteDisciplina/:disc_id", requestHandlers.deleteDisciplina)

app.listen(8081, function() {
    console.log("http://localhost:8081")
})


