function guardarAluno(){
    var nome = document.getElementById('nome');
    var dataNasc = document.getElementById('dataNasc');
    var genero = document.getElementById('genero');
    var email = document.getElementById('email');
    var foto = document.getElementById('foto');

    Turmaaaa.addAluno(nome.value, dataNasc.value, genero.value, email.value, foto.value)
    Turmaaaa.showAlunos()
    nome.value = ""
    dataNasc.value = ""
    genero.value = ""
    email.value = ""
    foto.value = "" 
}

function guardarDisc(){
    var nome = document.getElementById('disciplina');
    var docente = document.getElementById('docente');

    Turmaaaa.addDisciplina(nome.value, docente.value)
    Turmaaaa.showDisciplina()
    docente.value = ""
    
}