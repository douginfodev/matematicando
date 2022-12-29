function olaJava() {
  alert('WELCOME PLAYER');
}

function randomize(vetCards){
  vetor =  vetCards
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

    return vetor;
}

function amountCards(vet, indice, cardsVet) {
  ind = (indice * 7);

  for (i = 0; i < 7; i++) {
    cardsVet[ind] = vet[i];
    console.log(cardsVet[ind]);
    ind += 1;
  }
}

// Função de distribuição de cartas
function distributeCards(indice, vetCards) {
  indexL = 0;
  ind = indice;
  vetor = [];

  for (i = 0; i < 7; i++) {
    vetor[indexL] = vetCards[ind];
    ind += 3;
    indexL += 1;
  }

  return vetor;
}