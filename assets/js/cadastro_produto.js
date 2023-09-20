
function CadastrarProduto() {

    if (nome_produto.value != "" && preco.value != "" && quantidade.value != "") {
        preco.value = DesformatarKZ(preco.value);
        produto = {
            "idProduto": idProduto,
            "nome_produto": nome_produto.value,
            "preco": preco.value,
            "quantidade": quantidade.value
        };

        lista_produtos[idProduto] = produto;
        console.log(lista_produtos);
        idProduto += 1;
        Swal.fire("Sucesso", "Cadastro feito com sucesso", "success");
        LimparCamposProduto();
    } else {
        BordarCampoVazioProduto();
    }
}

function EliminarBordaCampoProduto() {
    campos_input.forEach(element => {
        if (element.value != "") {
            element.style = "border:  default";
        }
    });

    quantidade.addEventListener("change", () => {
        if (quantidade.value != "") {
            quantidade.style = "border:  default";
        }
    });
}

function BordarCampoVazioProduto() {
    if (nome_produto.value == "") {
        nome_produto.style = "border: 3px solid red"
    }

    if (preco.value == "") {
        preco.style = "border: 3px solid red"
    }

    if (quantidade.value == "") {
        quantidade.style = "border: 3px solid red"
    }
}

function LimparCamposProduto() {
    nome_produto.value = "";
    preco.value = "";
    quantidade.value = "";
}

setInterval(() => {
    EliminarBordaCampoProduto();
}, 1000);