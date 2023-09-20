

function Autenticar() {
    if (codigo_acesso_sessao.value != "" && codigo_acesso_sessao.value == utilizador.codigo_acesso) {
        Swal.fire("Sucesso", "Código Aceite", "success");
        codigo_acesso_sessao.value = "";
        UtilizadorLogado();
        form_produto.style = "display: block";
        form_sessao.style = "display: none";
        view_sessao.style = "display: none";
    } else {
        Swal.fire("Erro", "Código Rejeitado", "error");
        codigo_acesso_sessao.value = "";
    }
}

function UtilizadorLogado() {
    nome_utilizdador.innerHTML = "<b>Nome:</b> " + utilizador.nome + " " + utilizador.sobrenome;
    nome_utilizdador.style = "display: block";
}