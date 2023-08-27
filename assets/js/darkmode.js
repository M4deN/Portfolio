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
  
    // Alternar o modo escuro quando o botão for clicado
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
