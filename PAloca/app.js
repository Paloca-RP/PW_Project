const express = require('express')
const path = require('path')

const app = express();

app.use(express.urlencoded({ extended : false}))

//ficheiros estaticos
app.use(express.static(path.join(__dirname, 'public')))

//engine (View)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

//pagina index
app.get('/', function(req, res) {
    res.render('index')
})

//porta do server 
app.listen(8081, () => {
    console.log("Funciona na porta 8081")
})

module.exports = app

//https://youtu.be/S-nC83myMIs?t=397