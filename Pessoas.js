var pessoas, index;

function cadPessoa(nome, dataNascimento, cpf) {

            var formValido = true;
            if (cpf == null || cpf == "") {
                formValido = false;
                alert("O Campo CPF deve ser preenchido corretamente!");
            }
            if (cpf.length < 11){
                formValido = false;
                alert("O Campo CPF deve ser preenchido corretamente!");
            }
    
            //Se o campo não for preenchido adequadamente a função não pode ser executada
            if(formValido == false)
                return;

                else{
       
        //Exibir o erro em uma tag HTML
        var formValido = true;
        var erroTag = document.getElementById("erros");
        erroTag.innerHTML = "";
        if (nome == null || nome == "") {
            formValido = false;
            erroTag.innerHTML += "O Campo NOME deve ser preenchido! \n"; 
        }
        if (nome.length < 3){
            formValido = false;
            erroTag.innerHTML += "Deve ter mais que 3 caracteres. \n"; 
        }

        //Se o campo não for preenchido adequadamente a função não pode ser executada
        if(formValido == false)
            return;

            else{

        //Exibir o erro em uma tag HTML
        var formValido = true;
        var erroTag = document.getElementById("erros");
        erroTag.innerHTML = "";
        if (dataNascimento == null || dataNascimento == "") {
            formValido = false;
            erroTag.innerHTML += "O Campo DATA deve ser preenchido! \n"; 
        }
        if (dataNascimento.length < 6){
            formValido = false;
            erroTag.innerHTML += "O Campo Data deve ser preenchido corretamente! \n"; 
        }

        //Se o campo não for preenchido adequadamente a função não pode ser executada
        if(formValido == false)
            return;
    }
}

    pessoas = document.getElementById("tbPessoas");
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);
    var linhaParam;

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellDataNascimento = linha.insertCell(2);
    var cellCPF = linha.insertCell(3);


    cellCodigo.innerHTML = qtdlLinhas;
    cellNome.innerHTML = nome;
    cellDataNascimento.innerHTML = dataNascimento;
    cellCPF.innerHTML = cpf;

    preencheCamposForm();

}

function altPessoa(nome, dataNascimento, cpf) {

    
    var formValido = true;
    if (cpf == null || cpf == "") {
        formValido = false;
        alert("O Campo CPF deve ser preenchido corretamente!");
    }
    if (cpf.length < 11){
        formValido = false;
        alert("O Campo CPF deve ser preenchido corretamente!");
    }

    //Se o campo não for preenchido adequadamente a função não pode ser executada
    if(formValido == false)
        return;

        else{

//Exibir o erro em uma tag HTML
var formValido = true;
var erroTag = document.getElementById("erros");
erroTag.innerHTML = "";
if (nome == null || nome == "") {
    formValido = false;
    erroTag.innerHTML += "O Campo NOME deve ser preenchido! \n"; 
}
if (nome.length < 3){
    formValido = false;
    erroTag.innerHTML += "Deve ter mais que 3 caracteres. \n"; 
}

//Se o campo não for preenchido adequadamente a função não pode ser executada
if(formValido == false)
    return;

    else{

//Exibir o erro em uma tag HTML
var formValido = true;
var erroTag = document.getElementById("erros");
erroTag.innerHTML = "";
if (dataNascimento == null || dataNascimento == "") {
    formValido = false;
    erroTag.innerHTML += "O Campo DATA deve ser preenchido! \n"; 
}
if (dataNascimento.length < 6){
    formValido = false;
    erroTag.innerHTML += "O Campo Data deve ser preenchido corretamente! \n"; 
}

//Se o campo não for preenchido adequadamente a função não pode ser executada
if(formValido == false)
    return;
}
}


    pessoas.rows[index].cells[1].innerHTML = nome;
    pessoas.rows[index].cells[2].innerHTML = dataNascimento;
    pessoas.rows[index].cells[3].innerHTML = cpf;
}

function preencheCamposForm() {

    for (var i = 0; i < pessoas.rows.length; i++) {
        pessoas.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("txtDataNascimento").value = pessoas.rows[index].cells[2].innerText;
            document.getElementById("txtCPF").value = pessoas.rows[index].cells[3].innerText;
        }
    }
}

function delRegistro() {

    for (var i = 0; i < pessoas.rows.length; i++) {
        if (index == i) {
            pessoas.deleteRow(index);
            return;
        }
    }
}

