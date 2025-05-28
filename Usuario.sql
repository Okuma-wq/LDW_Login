Create database LDW_Usuario;
Go


CREATE TABLE Usuario(
	Id int primary key Identity,
	Nome varchar(250),
	CPF varchar(15),
	Telefone varchar(15),
	Endereco varchar(250),
	Email varchar(250),
	Senha varchar(250)
)