var Turmaaaa

window.addEventListener('load', function(){
    if(localStorage.turma){
        let aux1 = JSON.parse(localStorage.getItem('turma'))
        console.log(aux1)
        Turmaaaa = new Turma(aux1.nome, aux1.ano, aux1.responsavel, aux1.emailResponsavel, aux1.curso)

        for(let aluno of aux1.aluno){
            Turmaaaa.addAluno(aluno.nome, aluno.dataNasc, aluno.genero, aluno.email, aluno.foto)            
        }
        for(let disciplina of aux1.disciplina){
            Turmaaaa.addDisciplina(disciplina.nome, disciplina.docente)
        }
        for(let inscricao of aux1.inscricao){
            Turmaaaa.addInscricao(inscricao.disciplina_ID, inscricao.aluno_ID, inscricao.nota)
        }

        
        Turmaaaa.infoshowAlunos()
        Turmaaaa.infoshowDisciplina()
    }else{
        Turmaaaa = new Turma("TPSI-02", 2020, "Paula Miranda", "Mirandinha@ips.pt", "PMiranda-jpg")
        Turmaaaa.addAluno("Ricardo Palhoça","06/02/2002","Masculino","rpalhoca@ip.pt","Paloca.png")
        Turmaaaa.addAluno("Pedro Serpe","20/06/2001","Masculino","serpe@estudantes.ips.pt","serpe.png")
        Turmaaaa.addDisciplina("Programação Web","José Bento")
        Turmaaaa.addDisciplina("Elementos de Matematica II","Paula Reis")
        console.log(Turmaaaa.aluno)
        localStorage.setItem("turma",JSON.stringify(Turmaaaa))
        Turmaaaa.showAlunos()
        Turmaaaa.showDisciplina()
        Turmaaaa.infoshowAlunos()
        Turmaaaa.infoshowDisciplina()
    }
})



