class Turma{
    constructor (nome, ano, responsavel, emailResponsavel, curso){
        this.nome = nome
        this.ano = ano
        this.responsavel = responsavel
        this.emailResponsavel = emailResponsavel
        this.curso = curso
        this.aluno = []
        this.disciplina = []
        this.inscricao = []
    }
}
/*///////////////////////////////////////////////////////////////////////////////////////////// */
class Aluno{
    constructor(id, nome, dataNasc, genero, email, foto){ 
        this.id = id 
        this.nome = nome
        this.dataNasc = dataNasc
        this.genero = genero
        this.email = email
        this.foto = foto
    }
} 
/*///////////////////////////////////////////////////////////////////////////////////////////// */
class Disciplina{
    constructor (id, nome, docente){
        this.id = id        
        this.nome = nome        
        this.docente = docente
    }
} 
/*///////////////////////////////////////////////////////////////////////////////////////////// */
class InscricaoDisc{
    constructor(id, disciplina_ID, aluno_ID, nota){
        this.id = id        
        this.disciplina_ID = disciplina_ID
        this.aluno_ID = aluno_ID
        this.nota = nota
    }
}


/*///////////////////////////////////////////////////////////////////////////////////////////// */
function StringNome(nome){     
    var splitNome = nome.toLowerCase().split(' ')//função que transforma uma String em nome próprio
    for (var i = 0; i < splitNome.length; i++) 
        splitNome[i] = splitNome[i].charAt(0).toUpperCase() + splitNome[i].substring(1) 
    return splitNome.join(' ')
}
function StringDocente(docente){     
    var splitNome = docente.toLowerCase().split(' ')//função que transforma uma String em nome próprio
    for (var i = 0; i < splitNome.length; i++) 
        splitNome[i] = splitNome[i].charAt(0).toUpperCase() + splitNome[i].substring(1) 
    return splitNome.join(' ')
}
//js da navbar
function openNav() {
    document.getElementById("navbar").style.width = "100%";
  }  
function closeNav() {
    document.getElementById("navbar").style.width = "0%";
  }
//---------------------------------------------------------------  
function AutoID(arrays){
    let mx = -1
    for(let some of arrays) {
        if (some.id > mx){
            mx = some.id
        }
    }
    mx++
    return mx++
}