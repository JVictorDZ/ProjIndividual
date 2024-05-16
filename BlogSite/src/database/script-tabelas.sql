-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database Arcadia;
use Arcadia;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

create table quiz (
idQuiz int primary key auto_increment,
nomeQuiz varchar(100) not null
);

create table perguntas (
idPerguntas int primary key auto_increment,
fkQuiz int,
textoPergunta text not null,
constraint chkQuiz foreign key (fkQuiz) references quiz(idQuiz)
);

INSERT INTO perguntas (fkQuiz, textoPergunta) VALUES
(1, 'Quem é a protagonista principal de "Life is Strange"?'),
(1, 'Qual é o nome da cidade fictícia onde "Life is Strange" se passa?'),
(1, 'Qual habilidade sobrenatural a personagem Max Caulfield possui no jogo?'),
(1, 'Quem é a melhor amiga de Max Caulfield em "Life is Strange"?'),
(1, 'Qual é o nome da prestigiada academia frequentada por Max Caulfield no jogo?'),
(1, 'Qual música icônica de Syd Matters serve como tema principal do jogo?'),
(1, 'Qual é o tema central de "Life is Strange"?');


create table resposta (
idResposta int primary key auto_increment,
fkPergunta int,
textoResposta text not null,
correto boolean not null,
constraint chkR foreign key (fkPergunta) references perguntas(idPerguntas)
);




INSERT INTO resposta (fkPergunta, textoResposta, correto) VALUES
(1, 'Max Caulfield', true),
(1, 'Chloe Price', false),
(1, 'Rachel Amber', false),
(1, 'Nathan Prescott', false),
(2, 'Arcadia Bay', true),
(2, 'Blackwell Academy', false),
(2, 'Seattle', false),
(2, 'San Francisco', false),
(3, 'Manipulação do tempo', true),
(3, 'Telecinese', false),
(3, 'Teletransporte', false),
(3, 'Leitura da mente', false),
(4, 'Chloe Price', true),
(4, 'Rachel Amber', false),
(4, 'Kate Marsh', false),
(4, 'Victoria Chase', false),
(5, 'Blackwell Academy', true),
(5, 'Arcadia Bay High', false),
(5, 'Prescott Academy', false),
(5, 'Jefferson Academy', false),
(6, 'Obstacles', true),
(6, 'Golden Hour', false),
(6, 'To All of You', false),
(6, 'The Sense of Me', false),
(7, 'Amizade', true),
(7, 'Aventura', false),
(7, 'Viagem no Tempo', false),
(7, 'Amor', false);



create table Tentativa (
idTentativa int primary key auto_increment,
fkusuario int,
fkQuiz int,
pontos int,
tentativaData timestamp default current_timestamp,
constraint chkUser FOREIGN key (fkusuario) references usuario(idUsuario),
constraint chkQuiz2 FOREIGN key (fkQuiz) references quiz(idQuiz)

);









-- CREATE TABLE empresa (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	razao_social VARCHAR(50),
-- 	cnpj CHAR(14)
-- );

-- CREATE TABLE usuario (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	nome VARCHAR(50),
-- 	email VARCHAR(50),
-- 	senha VARCHAR(50),
-- 	fk_empresa INT,
-- 	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
-- );

-- CREATE TABLE aviso (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	titulo VARCHAR(100),
-- 	descricao VARCHAR(150),
-- 	fk_usuario INT,
-- 	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
-- );

-- create table aquario (
-- /* em nossa regra de negócio, um aquario tem apenas um sensor */
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	descricao VARCHAR(300),
-- 	fk_empresa INT,
-- 	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
-- );

-- /* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

-- create table medida (
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	dht11_umidade DECIMAL,
-- 	dht11_temperatura DECIMAL,
-- 	luminosidade DECIMAL,
-- 	lm35_temperatura DECIMAL,
-- 	chave TINYINT,
-- 	momento DATETIME,
-- 	fk_aquario INT,
-- 	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
-- );

-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);