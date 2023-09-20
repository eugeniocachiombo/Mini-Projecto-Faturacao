
let tb_body_produtos = document.querySelector("#tb_body_produtos");
let info_tbl_produtos = document.querySelector("#info_tbl_produtos");
let table_produtos = document.querySelector("#table_produtos");

function EscreverTabelaProdutos() {
    tb_body_produtos.innerHTML = "";

    if (lista_produtos == "") {
        info_tbl_produtos.innerHTML = "<h1>Sem produtos de momento</h1>";
        table_produtos.style = "display: none";
    } else {
        info_tbl_produtos.innerHTML = "";
    }

    for (let i = 1; i < lista_produtos.length; i++) {
        let tr = document.createElement("tr");
        let td_idProduto = document.createElement("td");
        let td_nome_produto = document.createElement("td");
        let td_preco = document.createElement("td");
        let td_quantidade = document.createElement("td");

        table_produtos.style = "display: block; width: 100%;";
        td_idProduto.innerHTML = lista_produtos[i].idProduto;
        td_nome_produto.innerHTML = lista_produtos[i].nome_produto;
        td_preco.innerHTML = TratarMoeda(lista_produtos[i].preco) + ",00 KZ";
        td_quantidade.innerHTML = lista_produtos[i].quantidade;

        tr.appendChild(td_idProduto);
        tr.appendChild(td_nome_produto);
        tr.appendChild(td_preco);
        tr.appendChild(td_quantidade);
        tr.classList.add("bg-dark");
        tr.classList.add("text-light");
        tb_body_produtos.appendChild(tr);
        table_produtos.classList.add("w-50");
    }
}

setInterval(() => {
    EscreverTabelaProdutos();
}, 1000);