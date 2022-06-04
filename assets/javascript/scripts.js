function test() {
    // definições
    var password;
    var confirmPassword;
    var number;
    const regex = /[0-9]/;
    var refugee, host;
    var error = false;

    //atribuições
    number = document.getElementById("number").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
    refugee = document.getElementById("refugee").checked;
    host = document.getElementById("host").checked;

    //comparações

    //---password
    if (password != confirmPassword) {
        alert('A senha não é igual.');
        error = true;
    }

    //---telefone
    if (regex.test(number) == false) {
        alert('Número inválido.')
        error = true;
    }

    //---tipo
    if (refugee == false && host == false){
        alert('Informe se você é uma refugiada ou uma anfitriã.')
        error = true;
    }

    //---retorno ao usuario
    if (error == false){
        alert('Cadastro realizado com sucesso!')
    }

}

