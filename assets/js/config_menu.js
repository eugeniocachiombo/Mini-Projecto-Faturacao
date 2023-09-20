var view_cadastrar = document.querySelector("#view_cadastrar");
var view_sessao = document.querySelector("#view_sessao");
var view_produtos_vendidos = document.querySelector("#view_produtos_vendidos");
var form_sessao = document.querySelector("#form_sessao");
var form_cadastrar = document.querySelector("#form_cadastrar");
var form_produto = document.querySelector("#form_produto");
var form_cadastrar_produto = document.querySelector("#form_cadastrar_produto");
var info_inicial = document.querySelector("#info_inicial");
var form_vender_produto = document.querySelector("#form_vender_produto");

function ViewCadastrar() {
    form_cadastrar_utilizador.style = "display: block";
    form_produto.style = "display: none";
    form_cadastrar_produto.style = "display: none";
    form_sessao.style = "display: none";
    info_inicial.style = "display: none";
    form_vender_produto.style = "display: none";
    form_produtos_vendidos.style = "display: none";
}

function ViewSessao() {
    form_sessao.style = "display: block";
    form_produto.style = "display: none";
    form_cadastrar_produto.style = "display: none";
    form_cadastrar_utilizador.style = "display: none";
    info_inicial.style = "display: none";
    form_vender_produto.style = "display: none";
    form_produtos_vendidos.style = "display: none";
}

function ViewProduto() {
    form_produto.style = "display: block;";
    form_cadastrar_produto.style = "display: none";
    form_sessao.style = "display: none";
    form_cadastrar_utilizador.style = "display: none";
    info_inicial.style = "display: none";
    form_vender_produto.style = "display: none";
    form_produtos_vendidos.style = "display: none";
}

function OcultarCadastroProduto() {
    if (utilizador.codigo_acesso == "") {
        form_cadastrar_produto.style = "display: none";
        info_inicial.style = "display: block";
    } else {
        form_cadastrar_produto.style = "display: block";
        info_inicial.style = "display: none";
    }
}

function OcultarVendaProduto() {
    if (utilizador.codigo_acesso == "") {
        form_vender_produto.style = "display: none";
        form_produtos_vendidos.style = "display: none";
        info_inicial.style = "display: block";
    } else {
        form_vender_produto.style = "display: block";
        info_inicial.style = "display: none";
    }
}

function ViewCadastrarProduto() {
    form_cadastrar_produto.style = "display: block;";
    form_produto.style = "display: none";
    form_sessao.style = "display: none";
    form_cadastrar_utilizador.style = "display: none";
    info_inicial.style = "display: none";
    form_vender_produto.style = "display: none";
    form_produtos_vendidos.style = "display: none";
    OcultarCadastroProduto();
}

function ViewVenderProduto() {
    form_vender_produto.style = "display: block";
    form_cadastrar_produto.style = "display: none;";
    form_produto.style = "display: none";
    form_sessao.style = "display: none";
    form_cadastrar_utilizador.style = "display: none";
    form_produtos_vendidos.style = "display: none";
    info_inicial.style = "display: none";
    OcultarVendaProduto();
    ListarProdutosParaVenda();
}

function ViewProdutosVendidos() {
    form_produtos_vendidos.style = "display: block";
    form_vender_produto.style = "display: none";
    form_cadastrar_produto.style = "display: none;";
    form_produto.style = "display: none";
    form_sessao.style = "display: none";
    form_cadastrar_utilizador.style = "display: none";
    info_inicial.style = "display: none";
}
