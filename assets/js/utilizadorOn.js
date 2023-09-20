var nome_utilizdador = document.querySelector("#nome_utilizdador");
var nome = document.querySelector("#nome");
var sobrenome = document.querySelector("#sobrenome");
var genero = document.querySelector("#genero");
var cargo = document.querySelector("#cargo");
let codigo_acesso_sessao = document.querySelector("#codigo_acesso_sessao");
let codigo_acesso_cadastro = document.querySelector("#codigo_acesso_cadastro");
let campos_input = document.querySelectorAll("input[type='text']");
let campos_select = document.getElementsByTagName("select");

let utilizador = {
    "nome": "",
    "sobrenome": "",
    "genero": "",
    "cargo": "",
    "codigo_acesso": ""
};


