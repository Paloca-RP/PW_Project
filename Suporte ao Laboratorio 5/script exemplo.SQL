-- Ficheiro \MYSQL\Db.SQL

--
-- Linguagem SQL
-- 
-- Ficheiro: Db.SQL
--
-- Autor: Luís Damas  (04/04/2004)
--
-- Para executar este script, execute o MYSQL e depois na linha de comando escreva
-- MYSQL> source <caminho-para-chegar-ao-ficheiro>\db.sql      (NOTA: sem ;)
--

-- Criar a Base de Dados SQLTESTE
-- PODE DAR ERRO SE JÁ EXISTIR mas ignore o erro
CREATE DATABASE SQLTESTE;

-----------------------------------------------------------
-- Apagar as Tabelas para o caso de já existirem com outro conteudo 
-----------------------------------------------------------
Use SQLTESTE;

DROP TABLE IF EXISTS Pessoa;
DROP TABLE IF EXISTS Postal;
DROP TABLE IF EXISTS Mensagem;
DROP TABLE IF EXISTS Comissao;


--
-- Criação da Tabela Postal e Introdução dos Dados
--
CREATE TABLE Postal(Codigo       Numeric(4)  PRIMARY KEY, 
                    Localidade   Char(30)    NOT NULL
                   );

INSERT INTO Postal VALUES(1000,'LISBOA');
INSERT INTO Postal VALUES(1100,'LISBOA');
INSERT INTO Postal VALUES(1200,'LISBOA');
INSERT INTO Postal VALUES(1500,'LISBOA');
INSERT INTO Postal VALUES(2000,'SANTAREM');
INSERT INTO Postal VALUES(2300,'TOMAR');
INSERT INTO Postal VALUES(3000,'COIMBRA');
INSERT INTO Postal VALUES(4000,'PORTO');
INSERT INTO Postal VALUES(9000,'FUNCHAL');



-----------------------------------------------------------
-- Criação da Tabela Pessoa e Introdução dos Dados
-----------------------------------------------------------
CREATE TABLE Pessoa(Id         NUMERIC           PRIMARY KEY, 
                    Nome       CHAR(30)          NOT NULL,
                    Idade      INTEGER           NOT NULL CHECK (Idade BETWEEN 0 AND 150),
                    Salario    NUMERIC(10,2)     NOT NULL,
                    Telefone   CHAR(12)          NULL,
                    Cod_Postal NUMERIC(4)        REFERENCES Postal(Codigo)
                   );
CREATE UNIQUE INDEX iNome ON Pessoa(Nome);
CREATE INDEX iTelefone ON Pessoa(Telefone);

INSERT INTO Pessoa VALUES(42,'António Dias',43,74000,'789654',1500);
INSERT INTO Pessoa VALUES(5,'Célia Morais',26,170000,'123456',1100);
INSERT INTO Pessoa VALUES(32,'Florinda Simões',35,147000,NULL,4000);
INSERT INTO Pessoa VALUES(37,'Isabel Espada',28,86000,NULL,1100);
INSERT INTO Pessoa VALUES(49,'José António',17,210000,NULL,1500);
INSERT INTO Pessoa VALUES(14,'Nascimento Augusto',35,220000,'456123',2300);
INSERT INTO Pessoa VALUES(25,'Paulo Viegas',32,95000,NULL,1500);

-----------------------------------------------------------
-- Criação da Tabela Mensagem e Introdução dos Dados
-----------------------------------------------------------
CREATE TABLE Mensagem(Id_Msg     NUMERIC           PRIMARY KEY, 
                      Mensagem   CHAR(30)          NOT NULL
                     );
CREATE UNIQUE INDEX iMsg ON Mensagem(Mensagem);

INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(10,'Comissão de Vendas');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(20,'Fretes Individuais');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(30,'Fretes Empresas');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(40,'Vendas Extra');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(50,'Deslocações');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(60,'Refeições');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(70,'Combustíveis');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(80,'Transportes');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(90,'Telefonemas');
INSERT INTO Mensagem(Id_Msg, Mensagem) VALUES(100,'Ofertas');


-----------------------------------------------------------
-- Criação da Tabela Comissao e Introdução dos Dados
-----------------------------------------------------------
CREATE TABLE Comissao(Id       NUMERIC          NOT NULL,
                      Id_Msg   NUMERIC          NOT NULL, 
                      Valor    NUMERIC          NOT NULL
                     );
CREATE INDEX iComissao ON Comissao(Id,Id_Msg);

INSERT INTO Comissao VALUES(14,10,10500);
INSERT INTO Comissao VALUES(25,10,2500);
INSERT INTO Comissao VALUES(14,100,3750);
INSERT INTO Comissao VALUES(14,70,400);
INSERT INTO Comissao VALUES(37,40,20);
INSERT INTO Comissao VALUES(37,30,14230);
INSERT INTO Comissao VALUES(37,10,5500);
INSERT INTO Comissao VALUES(14,60,2600);
INSERT INTO Comissao VALUES(25,30,370);
INSERT INTO Comissao VALUES(42,20,20);
INSERT INTO Comissao VALUES(37,50,120);
INSERT INTO Comissao VALUES(42,30,170);
INSERT INTO Comissao VALUES(49,20,2300);

COMMIT;