// expressões regulares para validar os campos
const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const regexLogin = /^[A-Za-z0-9._-]{4,}$/;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const regexSenha = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

const form = document.getElementById('cadastroForm');
const successMessage = document.getElementById('successMessage');

// const com os campos do formulário
const campos = {
  nomeCompleto: document.getElementById('nomeCompleto'),
  cpf: document.getElementById('cpf'),
  login: document.getElementById('login'),
  email: document.getElementById('email'),
  senha: document.getElementById('senha'),
  confirmaSenha: document.getElementById('confirmaSenha'),
  salario: document.getElementById('salario'),
  dependentes: document.getElementById('dependentes'),
  ir: document.getElementById('ir')
};

const feedbacks = {
  nome: document.getElementById('feedbackNome'),
  cpf: document.getElementById('feedbackCpf'),
  login: document.getElementById('feedbackLogin'),
  email: document.getElementById('feedbackEmail'),
  senha: document.getElementById('feedbackSenha'),
  confirmaSenha: document.getElementById('feedbackConfirmaSenha'),
  salario: document.getElementById('feedbackSalario'),
  dependentes: document.getElementById('feedbackDependentes')
};
// botões para mostrar/ocultar senha e limpar formulário
const toggleSenha = document.getElementById('toggleSenha');
const toggleConfirmaSenha = document.getElementById('toggleConfirmaSenha');
const btnLimpar = document.getElementById('btnLimpar');

function setFeedback(campo, feedback, isValid, message) {
  campo.classList.remove('is-valid', 'is-invalid');
  feedback.classList.remove('ok', 'err');
  
  if (isValid) {
    campo.classList.add('is-valid');
    feedback.classList.add('ok');
  } else {
    campo.classList.add('is-invalid');
    feedback.classList.add('err');
  }
  
  feedback.textContent = message;
}

function validarNome() {  //função para fazer a validação do nome de acordo com as regras
  const valor = campos.nomeCompleto.value.trim();
  if (!valor) {
    setFeedback(campos.nomeCompleto, feedbacks.nome, false, 'Nome completo é obrigatório');
    return false;
  } else if (valor.length < 3) {
    setFeedback(campos.nomeCompleto, feedbacks.nome, false, 'Nome deve ter pelo menos 3 caracteres');
    return false;
  } else {
    setFeedback(campos.nomeCompleto, feedbacks.nome, true, 'Nome válido');
    return true;
  }
}

function validarCPF() {  // função que faz a validação do CPF de acordo com o formato
  const valor = campos.cpf.value.trim();
  if (!valor) {
    setFeedback(campos.cpf, feedbacks.cpf, false, 'CPF é obrigatório');
    return false;
  } else if (!regexCPF.test(valor)) {
    setFeedback(campos.cpf, feedbacks.cpf, false, 'CPF deve estar no formato 000.000.000-00');
    return false;
  } else {
    setFeedback(campos.cpf, feedbacks.cpf, true, 'CPF válido');
    return true;
  }
}

function validarLogin() { //função para validar o login de acordo com as regras
  const valor = campos.login.value.trim();
  if (!valor) {
    setFeedback(campos.login, feedbacks.login, false, 'Login é obrigatório');
    return false;
  } else if (valor.length < 4) {
    setFeedback(campos.login, feedbacks.login, false, 'Login deve ter pelo menos 4 caracteres');
    return false;
  } else if (!regexLogin.test(valor)) {
    setFeedback(campos.login, feedbacks.login, false, 'Login deve conter apenas letras, números, . _ -');
    return false;
  } else {
    setFeedback(campos.login, feedbacks.login, true, 'Login válido');
    return true;
  }
}

function validarEmail() { //função para validar o email de acordo com o formato
  const valor = campos.email.value.trim();
  if (!valor) {
    setFeedback(campos.email, feedbacks.email, false, 'E-mail é obrigatório');
    return false;
  } else if (!regexEmail.test(valor)) {
    setFeedback(campos.email, feedbacks.email, false, 'E-mail deve ter um formato válido');
    return false;
  } else {
    setFeedback(campos.email, feedbacks.email, true, 'E-mail válido');
    return true;
  }
}

function validarSenha() { //função para validar a senha de acordo com as regras de minimo de caracteres e letra e digito
  const valor = campos.senha.value;
  if (!valor) {
    setFeedback(campos.senha, feedbacks.senha, false, 'Senha é obrigatória');
    return false;
  } else if (valor.length < 8) {
    setFeedback(campos.senha, feedbacks.senha, false, 'Senha deve ter pelo menos 8 caracteres');
    return false;
  } else if (!regexSenha.test(valor)) {
    setFeedback(campos.senha, feedbacks.senha, false, 'Senha deve conter pelo menos 1 letra e 1 dígito');
    return false;
  } else {
    setFeedback(campos.senha, feedbacks.senha, true, 'Senha válida');
    return true;
  }
}

function validarConfirmaSenha() { //função para verificar se as senhas coincidem
  const senha = campos.senha.value;
  const confirma = campos.confirmaSenha.value;
  
  if (!confirma) {
    setFeedback(campos.confirmaSenha, feedbacks.confirmaSenha, false, 'Confirmação de senha é obrigatória');
    return false;
  } else if (senha !== confirma) {
    setFeedback(campos.confirmaSenha, feedbacks.confirmaSenha, false, 'Senhas não coincidem');
    return false;
  } else {
    setFeedback(campos.confirmaSenha, feedbacks.confirmaSenha, true, 'Senhas coincidem');
    return true;
  }
}

function validarSalario() { // função para verificar o salario de acordo com as regras
  const valor = parseFloat(campos.salario.value);
  if (!campos.salario.value || isNaN(valor)) {
    setFeedback(campos.salario, feedbacks.salario, false, 'Salário é obrigatório');
    return false;
  } else if (valor <= 0) {
    setFeedback(campos.salario, feedbacks.salario, false, 'Salário deve ser maior que zero');
    return false;
  } else {
    setFeedback(campos.salario, feedbacks.salario, true, 'Salário válido');
    return true;
  }
}

function validarDependentes() { 
  const valor = parseFloat(campos.dependentes.value); // usar parseFloat para capturar o número
  const inteiro = Number.isInteger(valor); // verifica se é inteiro

  if (!campos.dependentes.value && campos.dependentes.value !== '0') {
    setFeedback(campos.dependentes, feedbacks.dependentes, false, 'Número de dependentes é obrigatório');
    return false;
  } else if (isNaN(valor) || valor < 0) {
    setFeedback(campos.dependentes, feedbacks.dependentes, false, 'Número de dependentes deve ser maior ou igual a zero');
    return false;
  } else if (!inteiro) {
    setFeedback(campos.dependentes, feedbacks.dependentes, false, 'Número de dependentes deve ser um número inteiro');
    return false;
  } else {
    setFeedback(campos.dependentes, feedbacks.dependentes, true, 'Número de dependentes válido');
    return true;
  }
}

function calcularIR() { //função para calcular o IR de acordo com as regras do exercício
  const salario = parseFloat(campos.salario.value) || 0;
  const dependentes = parseInt(campos.dependentes.value) || 0;

  
  let base = salario - (dependentes * 200);
  if (base < 0) base = 0;

  let ir = 0;

  if (base <= 2000.00) {
    ir = 0; // isento
  } else if (base <= 3000.00) {
    ir = base * 0.075; // 7,5%
  } else if (base <= 4500.00) {
    ir = base * 0.15;  // 15%
  } else if (base <= 6000.00) {
    ir = base * 0.225; // 22,5%
  } else {
    ir = base * 0.275; // 27,5%
  }

  campos.ir.value = ir.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
// função para mostrar ou esconder a sennha
function togglePassword(input, button) {
  if (input.type === 'password') {
    input.type = 'text';
    button.textContent = '🙈';
  } else {
    input.type = 'password';
    button.textContent = '👁️';
  }
}

campos.nomeCompleto.addEventListener('blur', validarNome);
campos.cpf.addEventListener('blur', validarCPF);
campos.login.addEventListener('blur', validarLogin);
campos.email.addEventListener('blur', validarEmail);
campos.senha.addEventListener('blur', validarSenha);
campos.confirmaSenha.addEventListener('blur', validarConfirmaSenha);
campos.salario.addEventListener('blur', validarSalario);
campos.dependentes.addEventListener('blur', () => {
  validarDependentes();
  calcularIR();
});

campos.dependentes.addEventListener('blur', () => {
  validarDependentes();
  calcularIR();
});

toggleSenha.addEventListener('click', () => togglePassword(campos.senha, toggleSenha));
toggleConfirmaSenha.addEventListener('click', () => togglePassword(campos.confirmaSenha, toggleConfirmaSenha));

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Array com validações 
  const validacoes = [
    { valido: validarNome(), campo: campos.nomeCompleto },
    { valido: validarCPF(), campo: campos.cpf },
    { valido: validarLogin(), campo: campos.login },
    { valido: validarEmail(), campo: campos.email },
    { valido: validarSenha(), campo: campos.senha },
    { valido: validarConfirmaSenha(), campo: campos.confirmaSenha },
    { valido: validarSalario(), campo: campos.salario },
    { valido: validarDependentes(), campo: campos.dependentes }
  ];

  const todosValidos = validacoes.every(v => v.valido === true);

  if (todosValidos) { //IF para mandar um alert caso tenha tido sucesso ou algum dado está faltando
    alert("Usuário cadastrado com sucesso!"); // caso tenha tido sucesso exibe uma mensagem de exito e limpa o formulario
    limparFormulario();
  } else {
    const primeiroInvalido = validacoes.find(v => v.valido === false);
    if (primeiroInvalido) {
      alert("Corrija os erros antes de continuar!"); //caso tenha dado erro exibe um alert falando para corrigir os erros
      primeiroInvalido.campo.focus();
    }
  }
});



function limparFormulario() { //função para fazer a limpeza do formulario 
  Object.values(campos).forEach(campo => {
    campo.value = '';
    campo.classList.remove('is-valid', 'is-invalid');
  });
  
  Object.values(feedbacks).forEach(feedback => {
    feedback.textContent = '';
    feedback.classList.remove('ok', 'err');
  });
  
  campos.ir.value = '0,00';
  
  campos.senha.type = 'password';
  campos.confirmaSenha.type = 'password';
  toggleSenha.textContent = '👁️';
  toggleConfirmaSenha.textContent = '👁️';
}


btnLimpar.addEventListener('click', limparFormulario); // chama a função limpar o formulario ao apertar no botão

