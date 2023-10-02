// Função para aplicar o modo escuro
function enableDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'enabled');
}

// Função para desativar o modo escuro
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'disabled');
}

// Verificar o estado atual do modo escuro no carregamento da página
const storedDarkMode = localStorage.getItem('darkMode');

if (storedDarkMode === 'enabled') {
  enableDarkMode();
} else {
  disableDarkMode();
}

// Adicione um evento para detectar a mudança de modo claro/escuro
document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  // Adicione um ouvinte de eventos para o clique no ícone
  darkModeToggle.addEventListener('click', function() {
    const body = document.body;
    
    const darkModeEnabled = body.classList.contains('dark-mode');
  
    if (!darkModeEnabled) {
      darkModeToggle.classList.remove('bx-moon');
      darkModeToggle.classList.add('bx-sun');
    } else {
      darkModeToggle.classList.remove('bx-sun');
      darkModeToggle.classList.add('bx-moon');
    }
  
    // Após mudar a classe, verifique novamente o modo escuro
    if (darkModeEnabled) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  })
});
