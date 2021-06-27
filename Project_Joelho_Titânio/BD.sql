create database projeto_PW;
use projeto_PW;

create table turma
(
    turma_id int AUTO_INCREMENT not NULL primary key,
    turma_nome VARCHAR(155) not null, 
    turma_ano YEAR not NULL,
    turma_responsavel VARCHAR (155),
    turma_emailResponsavel VARCHAR (155),
    curso VARCHAR (155) not null
);

create table aluno
(
    aluno_id int AUTO_INCREMENT not null primary key,
    aluno_nome VARCHAR (155),
    aluno_dataNasc date not null,
    aluno_genero CHAR (1) not NULL,
    aluno_email VARCHAR (155),
    aluno_foto VARCHAR (155)
);

CREATE table disciplina
(
    disc_id int AUTO_INCREMENT not null primary key,
    disc_nome VARCHAR (155),
    disc_docente VARCHAR (155), 
    fk_turma int not null, 
    FOREIGN KEY (fk_turma) REFERENCES turma(turma_id)
);

create table inscricao
(
    fk_disciplina int, 
    fk_aluno int,
    insc_obs char(45),
    PRIMARY KEY(fk_disciplina, fk_aluno),
    FOREIGN KEY (fk_disciplina) REFERENCES disciplina(disc_id) ON DELETE CASCADE,
    FOREIGN KEY (fk_aluno) REFERENCES aluno(aluno_id) ON DELETE CASCADE
);

insert into turma 
values (null, "TPSI-02", "2021", "Paula Miranda", "paula.miranda@ips.pt", "Técnico Superior Profissional em Tecnologias e Programação de Sistemas de Informação");
insert into disciplina 
values(null, "Programação Web", "José Bento", 1),
      (null, "Programação Orientada a Objectos", "Pedro Mesquita", 1);
insert into aluno 
values (null, "Ricardo Palhoça", "2002-02-06", "M", "200210020@estudantes.ips.pt", "foto.png");