document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const emailInput = document.getElementById('email');
    const messageElement = document.getElementById('form-message');

    // Verifica se o campo de email está preenchido
    if (emailInput.value.trim() === '') {
        messageElement.textContent = 'Por favor, insira um email válido.';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = `Obrigado por se inscrever, ${emailInput.value}!`;
        messageElement.style.color = 'green';
        emailInput.value = ''; // Limpa o campo após o envio
    }
});

