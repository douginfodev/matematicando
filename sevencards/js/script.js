// alert('WELCOME PLAYER');

// INITIAL ARRAY OF THE CARDS
let cardsArray = ['1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '10', '11', '12',
    '13', '14', '15',
    '16', '17', '18',
    '19', '20', '21'];

// LEFT
var CardListLeft   = [];
var CardListRight  = [];
var CardListCenter = [];

// DOM
var listLeft   = document.getElementsByClassName("listleft");
var listCenter = document.getElementsByClassName("center");
var listRight  = document.getElementsByClassName("list-right");


//RANDOMIZE ARRAY
for(k = 0; k < 10; k++){
let cardsRandomized = randomize(cardsArray);
var Loop = 0;
recurssividade();

function recurssividade(){
var posLeft   = 0;
var posCenter = 0;
var posRight  = 0;

CardListLeft   = distributeCards(0, cardsRandomized);
CardListCenter = distributeCards(1, cardsRandomized);
CardListRight  = distributeCards(2, cardsRandomized);


// PRINT CARDS
for (J = 0; J < 7; J++) {
    listLeft[J].innerHTML   = CardListLeft[J];
    listCenter[J].innerHTML = CardListCenter[J];
    listRight[J].innerHTML  = CardListRight[J];

    if (CardListLeft[J] === '10'){
      listLeft[J].style.backgroundImage = "url('imagem/fbutton.png')";
      posLeft   = 1;
      posCenter = 0;
      posRight  = 2;
      console.log('POS = L '+(J+1));
    }

    if (CardListCenter[J] === '10'){
      listCenter[J].style.backgroundImage = "url('imagem/fbutton.png')";
      posLeft   = 0;
      posCenter = 1;
      posRight  = 2;
      console.log('POS C = '+(J+1));
    }

    if (CardListRight[J] === '10'){
      listRight[J].style.backgroundImage = "url('imagem/fbutton.png')";
      posLeft   = 0;
      posCenter = 2;
      posRight  = 1;
      console.log('POS R = '+(J+1));
    }
}

amountCards(CardListLeft, posLeft, cardsRandomized);
amountCards(CardListCenter, posCenter, cardsRandomized);
amountCards(CardListRight, posRight, cardsRandomized);

Loop += 1;

if (Loop < 3)
  recurssividade();
// console.log(Loop);
}

console.log('CARTA FINAL = '+cardsRandomized[10]);
}

//document.getElementById("demo").innerHTML = "Hello World!";