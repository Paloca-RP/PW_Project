const express = require("express");
const requestHandlers = require("./scripts/request-handlers.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("www"))

app.get("/getAluno", requestHandlers.getAluno)//Mostrar alunos
//app.get("/postAluno", requestHandlers.postAluno)//inserir
//app.get("/deleteAluno", requestHandlers.deleteAluno)//eliminar

app.get("/getDisciplina", requestHandlers.getDisciplina)
//app.get("/postDisciplina", requestHandlers.postDisciplina)
//app.get("/deleteDisciplina", requestHandlers.deleteDisciplina)

app.listen(8081, function () {
    console.log("http://localhost:8081")
})