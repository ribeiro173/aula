// Pega os elementos
const valorElemento = document.getElementById('valor');
const botaoIncrementar = document.getElementById('incrementar');

// Contador inicial
let contador = 0;

// Função ao clicar no botão
botaoIncrementar.addEventListener('click', () => {
    contador++;
    valorElemento.textContent = contador;
});
