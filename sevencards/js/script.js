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
var L = 0;
var C = 1;
var R = 2;
var indexL = 0;
var indexC = 0;
var indexR = 0;

//RANDOMIZE ARRAY
let cardsRandomized = cardsArray
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

for (i = 0; i < 21; i++) {

    if (L === i) {
        CardListLeft[indexL] = cardsRandomized[i];
        L += 3;
        console.log(i+' -' +CardListLeft[indexL]);
        indexL += 1;
        
    }

    if (C === i) {
        CardListCenter[indexC] = cardsRandomized[i];
        C += 3;
        // console.log(i+' -' +centerCardList[indexC]);
        indexC += 1;
    }

    if (R === i) {
        CardListRight[indexR] = cardsRandomized[i];
        R += 3;
        // console.log(i+' -' +rightCardList[indexR]);
        indexR += 1;
    }
}

// PRINT CARDS
for (J = 0; J < 7; J++) {

     listLeft[J].innerHTML = CardListLeft[J];
     listCenter[J].innerHTML = CardListCenter[J];
     listRight[J].innerHTML = CardListRight[J];
}






//document.getElementById("demo").innerHTML = "Hello World!";