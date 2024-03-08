function copy(nomeId){
  var codeContent = document.getElementById(`${nomeId}`).innerText;

  navigator.clipboard.writeText(codeContent)
  .then (function() {
    console.log(`Copiado com sucesso à área de transferência!`);
  }).catch (function(error) {
    console.error(`Erro na cópia: `, error)
  });
}