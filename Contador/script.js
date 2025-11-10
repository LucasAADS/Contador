let contador = 0;

// Pegando os elementos do HTML
const contadorElemento = document.getElementById("contador");
const botaoMais = document.getElementById("botaoMais");
const botaoMenos = document.getElementById("botaoMenos");
const botaoZerar = document.getElementById("botaoZerar");

// Atualiza a tela
function atualizarTela() {
  contadorElemento.textContent = contador;

  // Efeito visual
  contadorElemento.classList.add("animar");
  setTimeout(() => contadorElemento.classList.remove("animar"), 200);
}

// Ações dos botões
botaoMais.addEventListener("click", () => {
  contador++;
  atualizarTela();
});

botaoMenos.addEventListener("click", () => {
  contador--;
  atualizarTela();
});

botaoZerar.addEventListener("click", () => {
  contador = 0;
  atualizarTela();
});
