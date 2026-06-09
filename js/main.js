
// Menu Hamburguer
const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');

function abrirMenu() {
    menu.classList.toggle('ativo');
}

btnMenu.addEventListener('click', abrirMenu);


// Dark Theme
const btn = document.getElementById('btnTema');
const icon = document.getElementById('themeIcon');

function trocarTema() {
    document.body.classList.toggle('light');

    if (document.body.classList.contains('light')) {
        icon.className = "fa-solid fa-sun";
    } else {
        icon.className = "fa-solid fa-moon";
    }
}

btn.addEventListener("click", trocarTema);


// Ano
let anoAtual = document.getElementById('anoAtual')
anoAtual.textContent = new Date().getFullYear()

