// alert('WELCOME PLAYER');

// INITIAL ARRAY OF THE CARDS
let cardsArray = ['1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '10', '11', '12',
    '13', '14', '15',
    '16', '17', '18',
    '19', '20', '21'];

// KEFT
var CardListLeft   = [];
var CardListRight  = [];
var CardListCenter = [];

// DOM
var listLeft   = document.getElementsByClassName("listleft");
var listCenter = document.getElementsByClassName("center");
var listRight  = document.getElementsByClassName("list-right");


//RANDOMIZE ARRAY
let cardsRandomized = randomize(cardsArray);



CardListLeft   = distributeCards(0, cardsRandomized);
CardListCenter = distributeCards(1, cardsRandomized);
CardListRight  = distributeCards(2, cardsRandomized);


// PRINT CARDS
for (J = 0; J < 7; J++) {
    listLeft[J].innerHTML   = CardListLeft[J];
    listCenter[J].innerHTML = CardListCenter[J];
    listRight[J].innerHTML  = CardListRight[J];
}

amountCards(CardListLeft, 0, cardsRandomized);
amountCards(CardListCenter, 1, cardsRandomized);
amountCards(CardListRight, 2, cardsRandomized);






//document.getElementById("demo").innerHTML = "Hello World!";