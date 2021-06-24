//const requestHandlers = require("./scripts/request-handlers.js");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("www"))

app.post("/postAluno", function(req, res){
    res.send("Nome: " + req.body.nome + 
    "<br>Data Nascimento: " + req.body.dataNasc +
    "<br>Genero: " + req.body.genero +
    "<br>Email: " + req.body.email + 
    "<br>Foto: " + req.body.foto + "<br")
    
})











//app.get("/getAluno", requestHandlers.getAluno)//Mostrar alunos
//inserir
//app.get("/deleteAluno", requestHandlers.deleteAluno)//eliminar

//app.get("/getDisciplina", requestHandlers.getDisciplina)
// app.get("/postDisciplina", requestHandlers.postDisciplina)
//app.get("/deleteDisciplina", requestHandlers.deleteDisciplina)

app.listen(8081);