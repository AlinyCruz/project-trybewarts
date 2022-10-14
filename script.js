const botaoEntrar = document.getElementsByClassName('entrar-btn')[0];
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const botaoEnviar = document.getElementById('submit-btn');
const checar = document.getElementById('agreement');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
botaoEntrar.addEventListener('click', login);

botaoEnviar.disabled = true;

function check() {
  if (checar.checked === true) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}

checar.addEventListener('click', check);
