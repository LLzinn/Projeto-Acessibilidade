function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    // Usar uma expressão regular para validar o email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, insira um endereço de email válido!");
        return false;
    }

    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return false;
    }

    alert("Registro bem-sucedido!");
    return true;
}
