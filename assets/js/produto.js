let idProduto = 1;
let produto;
let lista_produtos = [];
var nome_produto = document.querySelector("#nome_produto");
var preco = document.querySelector("#preco");
var quantidade = document.querySelector("#quantidade");

produto = {
    "idProduto": "",
    "nome_produto": "",
    "preco": "",
    "quantidade": ""
};

for (let i = 1; i < 100; i++) {
    var option_quantidade = document.createElement("option");
    option_quantidade.innerText = i;
    option_quantidade.value = i;
    quantidade.appendChild(option_quantidade);
}

function BlurPreco() {
    if (preco.value == "" || preco.value == ",00 KZ") {
        preco.value = "";
    }
}

function FocusPreco() {
    if (preco.value == "") {
        preco.value = ",00 KZ";
    }
}

function TratarDigitoPreco() {
    preco.value = TratarMoeda(preco.value) + ",00 KZ";
}

function DesformatarKZ(valor) {
    var kz = ",00 KZ";
    valor = valor.replace(kz, "");
    valor = valor.replace(/[.kz]/g, "");
    return valor;
}


function TratarMoeda(valor) {
    valor = DesformatarKZ(valor);
    switch (valor.length) {
        case 4:
            valor = valor[0] + "." + valor[1] + valor[2] + valor[3];
            break;

        case 5:
            valor = valor[0] + valor[1] + "." + valor[2] + valor[3] + valor[4];
            break;

        case 6:
            valor = valor[0] + valor[1] + valor[2] + "." + valor[3] + valor[4] + valor[5];
            break;

        case 7:
            valor = valor[0] + "." + valor[1] + valor[2] + valor[3] + "." + valor[4] + valor[5] + valor[6];
            break;

        case 8:
            valor = valor[0] + valor[1] + "." + valor[2] + valor[3] + valor[4] + "." + valor[5] + valor[6] + valor[7];
            break;

        case 9:
            valor = valor[0] + valor[1] + valor[2] + "." + valor[3] + valor[4] + valor[5] + "." + valor[6] + valor[7] + valor[8];
            break;

        case 10:
            valor = valor[0] + "." + valor[1] + valor[2] + valor[3] + "." + valor[4] + valor[5] + valor[6] + "." + valor[7] + valor[8] + valor[9];
            break;

        case 11:
            valor = valor[0] + valor[1] + "." + valor[2] + valor[3] + valor[4] + "." + valor[5] + valor[6] + valor[7] + "." + valor[8] + valor[9] + valor[10];
            break;

        case 12:
            valor = valor[0] + valor[1] + valor[2] + "." + valor[3] + valor[4] + valor[5] + "." + valor[6] + valor[7] + valor[8] + "." + valor[9] + valor[10] + valor[11];
            break;

        case 13:
            valor = valor[0] + "." + valor[1] + valor[2] + valor[3] + "." + valor[4] + valor[5] + valor[6] + "." + valor[7] + valor[8] + valor[9] + "." + valor[10] + valor[11] + valor[12];
            break;

        default:
            valor = valor;
            break;
    }

    return valor;
}

function OcultarFormVendaPdt() {
    if (lista_produtos != "") {
        view_vender_produto.style = "display: block";
    } else {
        view_vender_produto.style = "display: none";
    }
}

setInterval(() => {
    OcultarFormVendaPdt();
}, 1000);