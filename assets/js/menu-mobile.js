// Seleciona o menu e o botão
const menu = document.getElementById('menu-mobile');
const toggleMenuButton = document.getElementById('btn-open-menu-mobile');

// Variável para controlar o estado do menu
let isMenuOpen = false;

// Função para alternar o menu
function toggleMenu() {
  if (isMenuOpen) {
    menu.style.marginLeft = '-250px'; // Fecha o menu
    toggleMenuButton.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
  } else {
    menu.style.marginLeft = '0'; // Abre o menu
    toggleMenuButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
  }
  isMenuOpen = !isMenuOpen; // Inverte o estado
}

// Adiciona evento de clique ao botão
toggleMenuButton.addEventListener('click', toggleMenu);
