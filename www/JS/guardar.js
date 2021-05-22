var aux = false

function guardarAluno(){
    var nome = document.getElementById('nome');
    var dataNasc = document.getElementById('dataNasc');
    var genero = document.getElementById('genero');
    var email = document.getElementById('email');
    var foto = document.getElementById('foto');

    if(nome.value == null | nome == ""){
        nome.style.border = "1px solid green"
        aux = true
    }else{
        nome.style.border = "none"        
    }

    if(dataNasc.value == null | dataNasc == ""){
        dataNasc.style.border = "1px solid"
        aux = true
    }else{
        dataNasc.style.border = "none"        
    }

    if(genero.value == null | genero == ""){
        dataNasc.style.border = "1px solid green"
        aux = true
    }else{
        genero.style.border = "none"        
    }

    if(email.value == null | email == ""){
        email.style.border = "1px solid green"
        aux = true
    }else{
        email.style.border = "none"        
    }

    if(foto.value == null | foto == ""){
        foto.style.border = "1px solid green"
        aux = true
    }else{
        foto.style.border = "none"        
    }

    if(aux == true){
        throw "Falta campos"
    }

    Turmaaaa.addAluno(nome.value, dataNasc.value, genero.value, email.value, foto.value)
    Turmaaaa.showAlunos()
    nome.value = ""
    dataNasc.value = ""
    genero.value = ""
    email.value = ""
    foto.value = "" 
}

function guardarDisc(){
    var nome = document.getElementById('nome');
    var docente = document.getElementById('docente');

    if(nome.value == null | nome == ""){
        nome.style.border = "1px solid green"
        aux = true
    }else{
        nome.style.border = "none"        
    }

    if(docente.value == null | docente == ""){
        docente.style.border = "1px solid green"
        aux = true
    }else{
        docente.style.border = "none"        
    }

    if(aux == true){
        throw "Falta campos"
    }

    Turmaaaa.addDisciplina(nome.value, docente.value)
    Turmaaaa.showDisciplina()
    docente.value = ""
    


}