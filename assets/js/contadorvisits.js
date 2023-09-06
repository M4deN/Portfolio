// Verifique se o contador de visitas está armazenado em localStorage
let contador = localStorage.getItem('contador-visitas');

if (contador === null) {
  // Se não houver contador, defina-o como 1
  contador = 1;
} else {
  // Se houver contador, incremente-o
  contador = parseInt(contador) + 1;
}

// Atualize o valor do contador no HTML
document.getElementById('contador-visitas').textContent = contador + ' visitas';

// Armazene o novo valor do contador em localStorage
localStorage.setItem('contador-visitas', contador);