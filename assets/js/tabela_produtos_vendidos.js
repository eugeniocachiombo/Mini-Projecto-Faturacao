
let tb_body_produtos_vendidos = document.querySelector("#tb_body_produtos_vendidos");
let info_tbl_produtos_vendidos = document.querySelector("#info_tbl_produtos_vendidos");
let table_produtos_vendidos = document.querySelector("#table_produtos_vendidos");


function EscreverTabelaProdutos_vendidos() {
    tb_body_produtos_vendidos.innerHTML = "";

    if (lista_produtos_vendidos == "") {
        info_tbl_produtos_vendidos.innerHTML = "<h1>Sem produtos vendidos de momento</h1>";
        table_produtos_vendidos.style = "display: none";
    } else {
        info_tbl_produtos_vendidos.innerHTML = "";
    }

    for (let i = 0; i < lista_produtos_vendidos.length; i++) {
        let tr = document.createElement("tr");
        let td_idVenda = document.createElement("td");
        let td_nome_comprador = document.createElement("td");
        let td_nome_produto = document.createElement("td");
        let td_preco = document.createElement("td");
        let td_quantidade = document.createElement("td");
        let td_total_pago = document.createElement("td");

        table_produtos_vendidos.style = "display: block; width: 100%";
        td_idVenda.innerHTML = lista_produtos_vendidos[i].idVenda;
        td_nome_comprador.innerHTML = lista_produtos_vendidos[i].nome_comprador;
        td_quantidade.innerHTML = lista_produtos_vendidos[i].quantidade_vender;

        lista_produtos.forEach(element => {
            if (element.idProduto == lista_produtos_vendidos[i].produto_vender) {
                td_nome_produto.innerHTML = element.nome_produto;
                td_preco.innerHTML = TratarMoeda(element.preco) + ",00 KZ";
                var calcularPagamento = (Number(element.preco) * Number(lista_produtos_vendidos[i].quantidade_vender)).toString();
                td_total_pago.innerHTML = TratarMoeda(calcularPagamento) + ",00 KZ";
            }
        });

        tr.appendChild(td_idVenda);
        tr.appendChild(td_nome_comprador);
        tr.appendChild(td_nome_produto);
        tr.appendChild(td_preco);
        tr.appendChild(td_quantidade);
        tr.appendChild(td_total_pago);
        tr.classList.add("bg-dark");
        tr.classList.add("text-light");
        tb_body_produtos_vendidos.appendChild(tr);
    }
}

setInterval(() => {
    EscreverTabelaProdutos_vendidos();
}, 1000);