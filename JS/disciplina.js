class Disciplina
{
    constructor (id, nome, docente)
    {
        this.id = id;
        this.nome = nome;
        this.docente = docente;
    }    
}

class ListaDisciplinas
{
    constructor(){
        this.disciplinas = [];
    }

    adicionarDisciplina(nome, docente){
        // validar com throw

        // Calcular o ID automatico

        let mx = 0;
        for(let disciplina of this.disciplinas)
            if ( disciplina.id > mx)
                mx = disciplina.id;
        mx++;

        let disciplina = new Disciplina( mx, nome, docente );
        this.disciplinas.push(disciplina);
    }

    showDisciplinas(divid){
        let divobj = document.getElementById(divid);
        var str = '<table  class="table"><thead>';
        str += `<tr>
                <th>Nome</th>
            </tr><tbody>`;
        for( var dis of this.disciplinas)
            str += '<tr  class="success"><td>' + dis.nome + "</td></tr>";
        str += "</tbody></table>";
        divobj.innerHTML = str;

    }

}