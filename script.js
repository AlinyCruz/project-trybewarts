const botaoEntrar = document.getElementsByClassName('entrar-btn')[0];
const email = document.querySelector('.email');
const senha = document.querySelector('.senha');
const botaoEnviar = document.getElementById('submit-btn');
const checar = document.getElementById('agreement');
const contador = document.getElementById('counter');
const texto = document.getElementById('text');

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

function contandoCaracteres() {
  const caracteres = texto.value.length;
  const max = 500;
  const sobra = max - caracteres;
  contador.innerText = sobra;
}

texto.addEventListener('keyup', contandoCaracteres);

// const nome = document.getElementById('input-name');
// const sobrenome = document.getElementById('input-lastname');
// const email = document.getElementById('input-email');
// let casa = document.getElementById('house');


// display: none;



