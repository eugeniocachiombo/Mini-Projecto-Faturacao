

function CadastrarUtilizador() {

    if (nome.value != "" && sobrenome.value != "" && genero.value != "" && cargo.value != "") {
        utilizador = {
            "nome": nome.value,
            "sobrenome": sobrenome.value,
            "genero": genero.value,
            "cargo": cargo.value,
            "codigo_acesso": codigo_acesso_cadastro.value
        };
        Swal.fire("Sucesso", "Cadastro feito com sucesso", "success");
        LimparCamposUtilizaddor();
        form_cadastrar_utilizador.style = "display: none";
        form_sessao.style = "display: block";
        view_cadastrar.style = "display: none";
        console.log(utilizador);
    } else {
        this.BordarCampoVazioUtilizador();
    }
}

function EliminarBordaCampoUtilizador() {
    campos_input.forEach(element => {
        if (element.value != "") {
            element.style = "border:  default";
        }
    });

    cargo.addEventListener("change", () => {
        if (cargo.value != "") {
            cargo.style = "border:  default";
        }
    });

    genero.addEventListener("change", () => {
        if (genero.value != "") {
            genero.style = "border:  default";
        }
    });
}

function BordarCampoVazioUtilizador() {
    console.log("Funcionando");
    if (nome.value == "") {
        nome.style = "border: 3px solid red"
    }

    if (sobrenome.value == "") {
        sobrenome.style = "border: 3px solid red"
    }

    if (genero.value == "") {
        genero.style = "border: 3px solid red"
    }

    if (cargo.value == "") {
        cargo.style = "border: 3px solid red"
    }

    if (codigo_acesso_cadastro.value == "") {
        codigo_acesso_cadastro.style = "border: 3px solid red"
    }
}

function LimparCamposUtilizaddor() {
    nome.value = "";
    sobrenome.value = "";
    genero.value = "";
    cargo.value = "";
    codigo_acesso_cadastro.value = "";
}

setInterval(() => {
    EliminarBordaCampoUtilizador();
}, 1000);