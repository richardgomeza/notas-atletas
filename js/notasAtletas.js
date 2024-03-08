// Função para calcular a média das notas excluindo a maior e a menor nota
function calcularMedia(notas) {
  // Ordena as notas em ordem crescente
  notas = notas.sort(function (a, b) {
    return a - b;
  });

  // Elimina a maior e a menor nota
  let notasComputadas = notas.slice(1, 4);

  // Calcula a soma das notas
  let soma = 0;
  notasComputadas.forEach(function (nota) {
    soma += nota;
  });

  // Calcula a média das notas restantes
  return soma / notasComputadas.length;
}

// Função para apresentar os resultados ao usuário
function apresentarResultados(atletas) {
  atletas.forEach(function (atleta) {
    let nome = atleta.nome;
    let notas = atleta.notas;
    let media = calcularMedia(notas);
    let notasObtidas = notas.join(",");

    console.log("Atleta: " + nome);
    console.log("Notas Obtidas: " + notasObtidas);
    console.log("Média Válida: " + media.toFixed(2) + "\n");
  });
}

// Entrada de dados
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

// Chamada da função para apresentar os resultados
apresentarResultados(atletas);
