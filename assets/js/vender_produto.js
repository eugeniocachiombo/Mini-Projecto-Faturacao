let idVenda = 1;
let nome_comprador = document.querySelector("#nome_comprador");
let produto_vender = document.querySelector("#produto_vender");
let quantidade_vender = document.querySelector("#quantidade_vender");
let lista_produtos_vendidos = [];
let saldo_empresa = 0;
let mostrar_saldo_empresa = document.querySelector("#mostrar_saldo_empresa");


function ListarProdutosParaVenda() {
    produto_vender.innerHTML = "";

    if (produto_vender.innerHTML == "") {
        var option_quantidade = document.createElement("option");
        option_quantidade.innerText = "Selecione.......";
        produto_vender.appendChild(option_quantidade);
    }

    for (let i = 1; i < lista_produtos.length; i++) {
        var option_quantidade = document.createElement("option");
        option_quantidade.value = lista_produtos[i].idProduto;
        option_quantidade.innerText = lista_produtos[i].nome_produto + " : " + TratarMoeda(lista_produtos[i].preco) + ",00 KZ";
        produto_vender.appendChild(option_quantidade);
    }
}

for (let i = 1; i < 100; i++) {
    var option_quantidade = document.createElement("option");
    option_quantidade.innerText = i;
    option_quantidade.value = i;
    quantidade_vender.appendChild(option_quantidade);
}

function VenderProduto() {
    if (nome_comprador.value == "" || produto_vender.value == "" || quantidade_vender.value == "") {
        BordarCampoVazioProdutoVender();
    } else {
        for (let i = 1; i < lista_produtos.length; i++) {
            console.log("idProduto: " + lista_produtos[i].idProduto);
            console.log("produto_vender: " + produto_vender.value);
            if (lista_produtos[i].idProduto == produto_vender.value) {
                if (lista_produtos[i].quantidade == "0") {
                    Swal.fire("Mensagem de Erro", "Produto vazio no estoque", "error");
                } else if (lista_produtos[i].quantidade >= quantidade_vender.value) {

                    lista_produtos[i].quantidade = (Number(lista_produtos[i].quantidade) - Number(quantidade_vender.value)).toString();

                    lista_produtos_vendidos.push({
                        "idVenda": idVenda,
                        "nome_comprador": nome_comprador.value,
                        "produto_vender": produto_vender.value,
                        "quantidade_vender": quantidade_vender.value
                    });

                    if (lista_produtos[i].idProduto == produto_vender.value) {
                        var calcularPagamento = Number(lista_produtos[i].preco) * Number(quantidade_vender.value);
                        saldo_empresa += calcularPagamento;
                        mostrar_saldo_empresa.innerText = TratarMoeda((saldo_empresa).toString());
                    }

                    Swal.fire("Sucesso", "Produto vendido com sucesso", "success");
                    idVenda += 1;
                    LimparCamposProdutoVender();
                    break;
                } else {
                    Swal.fire("Mensagem de Erro", "Este produto contém apenas " + lista_produtos[i].quantidade, "error");
                }
            } else {
                Swal.fire("Mensagem de Erro", "Produto Não Encontrado", "error");
            }
        }
    }
}

function EliminarBordaCampoProdutoVender() {
    campos_input.forEach(element => {
        if (element.value != "") {
            element.style = "border:  default";
        }
    });

    produto_vender.addEventListener("change", () => {
        if (produto_vender.value != "") {
            produto_vender.style = "border:  default";
        }
    });

    quantidade_vender.addEventListener("change", () => {
        if (quantidade_vender.value != "") {
            quantidade_vender.style = "border:  default";
        }
    });
}

function BordarCampoVazioProdutoVender() {
    if (nome_comprador.value == "") {
        nome_comprador.style = "border: 3px solid red"
    }

    if (produto_vender.value == "") {
        produto_vender.style = "border: 3px solid red"
    }

    if (quantidade_vender.value == "") {
        quantidade_vender.style = "border: 3px solid red"
    }
}

function LimparCamposProdutoVender() {
    nome_comprador.value = "";
    produto_vender.value = "";
    quantidade_vender.value = "";
}

function OcultarTabelaProdutosVendidos() {
    if (lista_produtos_vendidos != "") {
        view_produtos_vendidos.style = "display: block";
    } else {
        view_produtos_vendidos.style = "display: none";
    }
}

setInterval(() => {
    OcultarTabelaProdutosVendidos();
    EliminarBordaCampoProdutoVender();
}, 1000);
