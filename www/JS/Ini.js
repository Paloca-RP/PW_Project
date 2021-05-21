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
         Turmaaaa.showAlunos()
        
        
        
       
    }else{
        
        Turmaaaa = new Turma("TPSI-02", 2021, "Paula Miranda", "pm@ips.pt", "TPSI");
        Turmaaaa.addAluno("nome","2000-11-10","Masculino","piça","come");
        Turmaaaa.addAluno("Gay","2000-11-10","Masculino","200210014@estudantes.ips.pt","foto.png");
        Turmaaaa.addDisciplina("Programação Orientada a Objetos","Pedro Mesquita");
        console.log(Turmaaaa.aluno)
        localStorage.setItem("turma",JSON.stringify(Turmaaaa));

        Turmaaaa.showAlunos();
        Turmaaaa.showDisciplina();
    }
})





