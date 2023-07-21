const form = document.getElementById('cadastroForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obter os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar_senha').value;
    const dataNascimento = document.getElementById('data_nascimento').value;
    const genero = document.getElementById('genero').value;

    // Validação simples da senha
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    // Criar objeto com os dados do usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        dataNascimento: dataNascimento,
        genero: genero
    };

    // Aqui você pode enviar os dados do usuário para o servidor usando AJAX ou outra abordagem.
    // Por exemplo:
    // fetch('/cadastrar', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(usuario)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data); // Resposta do servidor após o cadastro
    // })
    // .catch(error => {
    //     console.error('Erro ao enviar dados para o servidor:', error);
    // });
    console.log(usuario); // Exibir os dados do usuário no console (somente para fins de demonstração)
});