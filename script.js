// ==========================================
// MENU HAMBURGER - TOGGLE NO MOBILE
// ==========================================

// Pega o botao do menu e a lista de links
var botaoMenu = document.getElementById('menuToggle');
var listaLinks = document.getElementById('navbarLinks');

// Quando clicar no botao, abre ou fecha o menu
botaoMenu.addEventListener('click', function () {
    listaLinks.classList.toggle('aberto');
});


// ==========================================
// FECHAR MENU AO CLICAR EM UM LINK
// ==========================================

// Pega todos os links da navbar
var todosLinks = document.querySelectorAll('.navbar-links a');

// Para cada link, adiciona um evento de clique
for (var i = 0; i < todosLinks.length; i++) {
    todosLinks[i].addEventListener('click', function () {
        // Fecha o menu mobile ao clicar em um link
        listaLinks.classList.remove('aberto');
    });
}
