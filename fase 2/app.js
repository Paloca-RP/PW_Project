const express = require("express");
const requestHandlers = require("./scripts/request-handlers.js");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("www"));

// Alunos
app.get("/alunos", requestHandlers.getAlunos);

// Turma
/** @todo Completar */
app.get("/turma", requestHandlers.getTurma);

// Disciplina
app.get("/disciplina", requestHandlers.getDisciplina)

app.listen(8081, function () {
    console.log("Server running at http://localhost:8081");
});