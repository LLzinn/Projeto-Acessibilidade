// Definindo o tamanho do tabuleiro
const rows = 5;
const cols = 8;

// Criando a matriz do tabuleiro
const board = [];
for (let i = 0; i < rows; i++) {
  board[i] = [];
  for (let j = 0; j < cols; j++) {
    // Suponha que 0 representa água e 1 representa embarcação
    board[i][j] = Math.random() < 0.3 ? 1 : 0;
  }
}

// Pontuação do jogo
let score = 0;

// Número de chances
let chances = 3;

function shipOnClick(row, col) {
  const cell = document.getElementById(`ship${row}${col}`);
  if (board[row][col] === 1) {
    // Conteúdo é uma embarcação
    cell.src = "images/ship.jpg";
    score += 10; // Pontuação base para cada embarcação
  } else {
    // Conteúdo é água
    cell.src = "images/water.jpg";
    chances -= 1;

    if (chances === 0) {
      alert(`Fim do jogo! Sua pontuação: ${score}`);
      // Reinicializar o jogo ou redirecionar para uma página de fim de jogo
    }
  }
}
