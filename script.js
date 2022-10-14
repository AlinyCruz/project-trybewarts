const botaoEntrar = document.getElementsByClassName('entrar-btn')[0];
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

botaoEntrar.addEventListener('click', login);
