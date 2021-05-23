function guardarAluno(){
    var nome = document.getElementById('nome')
    var dataNasc = document.getElementById('dataNasc')
    var genero = document.getElementById('genero')
    var email = document.getElementById('email')
    var foto = document.getElementById('foto')

    Turmaaaa.addAluno(nome.value, dataNasc.value, genero.value, email.value, foto.value)
    Turmaaaa.showAlunos()
    nome.value = ""
    dataNasc.value = ""
    genero.value = ""
    email.value = ""
    foto.value = "" 
    alert("Inserido com Sucesso !!")
}

function guardarEditAluno(){
    var nome = document.getElementById('nome')
    var dataNasc = document.getElementById('dataNasc')
    var genero = document.getElementById('genero')
    var email = document.getElementById('email')
    var foto = document.getElementById('foto')

    Turmaaaa.editAluno(nome.value, dataNasc.value, genero.value, email.value, foto.value)
    Turmaaaa.showAlunos()
    nome.value = ""
    dataNasc.value = ""
    genero.value = ""
    email.value = ""
    foto.value = "" 
    alert("Inserido com Sucesso !!")
}

function guardarAluno(){
    var alunoID = document.getElementById('alunoID')
    var nome = document.getElementById('nome')
    var dataNasc = document.getElementById('dataNasc')
    var genero = document.getElementById('genero')
    var email = document.getElementById('email')
    var foto = document.getElementById('foto')

    if(!alunoID){
        alert("Erro!");
    } else {
        Turmaaaa.addAluno(nome.value, dataNasc.value, genero.value, email.value, foto.value)
        Turmaaaa.showAlunos()
        nome.value = ""
        dataNasc.value = ""
        genero.value = ""
        email.value = ""
        foto.value = "" 
        alert("Inserido com Sucesso !!")
    }
    
}

function guardarDisc(){
    var nome = document.getElementById('disciplina')
    var docente = document.getElementById('docente')

    Turmaaaa.addDisciplina(nome.value, docente.value)
    Turmaaaa.showDisciplina()
    nome.value = ""
    docente.value = ""
    alert("Inserido com Sucesso !!")
}


function guardar_DIC_ALUN(){
    var disciplinaID = document.getElementById('disciplinaID')
    var alunoID = document.getElementById('alunoID')
    var nota = document.getElementById('nota')

    Turmaaaa.addInscricao(disciplinaID.value, alunoID.value, nota.value)
    Turmaaaa.showInscricoesDisc()

    disciplinaID.value = ""
    alunoID.value = ""
    nota.value = ""
}