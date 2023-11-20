function validarCPF(cpf) {
    const regex = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
    return regex.test(cpf);
}

const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
    const cpfInput = document.getElementById('cpf');
    const cpf = cpfInput.value;

    if (!validarCPF(cpf)) {
        alert('CPF inválido. Por favor, insira um CPF válido no formato xxx.xxx.xxx-xx.');
        event.preventDefault();
    }
});
