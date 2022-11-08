const cardObjectDefined = [{
        id: 1,
        imagePath: 'assets/images/king-of-clubs.PNG'
    },
    {
        id: 2,
        imagePath: 'assets/images/Ace-of-Spades.PNG'
    },
    {
        id: 3,
        imagePath: 'assets/images/joker-card.PNG'
    },
    {
        id: 4,
        imagePath: 'assets/images/Queen-ofDiamonds.PNG'
    }
];

const queenId = 4 ;

const cardBackImgPath = 'assets/images/card-back-Blue.png';

let cards = [];

const playGameButtonElem = document.getElementById('playGame');
const cardContainerElem = document.querySelector('.card-placement');


const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = ".card-1";

const numCards = cardObjectDefined.length;

let cardPositions = [];

let gameInProgress = false ;
let shufflingInProgress = false ;
 let cardsRevealed = false ;


const currentGameStatusElem = document.querySelector('.current-status')
const winColor = "green";
const loseColor = "red";


loadGame();

function chooseCard(card){
  if(canChooseCard()){
    evaluateCardChoice(card)
    saveGameObjectToLocalStorage(score, roundNum)
    flipCard(card,false)

    setTimeout(() => {
        flipCards(false)
        updateStatusElement(currentGameStatusElem,"block", primaryColor,"Card positions revealed")

        endRound()

    },3000)
    cardsRevealed = true
  }
}

function updateStatusElement(elem , display, color ,innerHTML){
    elem.style.display = display;
    if(arguments.length > 2){
        elem.style.color = color;
        elem.innerHTML = innerHTML;
    }
}

function outputChoiceFeedBack(hit){
    if(hit)
    {
   updateStatusElement(currentGameStatusElem),"block",winColor, "Correct! Nice Guess!"
    }
    else
    {
    updateStatusElement(currentGameStatusElem, "block" , loseColor, "Wrong..Hard luck!")
    }
}

function evaluateCardChoice(card){
  if(card.id == queenId){
    updateScore();
    outputChoiceFeedback(true);
  }
 else
 {
  outputChoiceFeedback(false);
 }
}

function canChooseCard(){
   return gameinProgress == true && !shufflingInProgress && !cardsRevealed ;
}

function loadGame() {
    createCards();
    cards = document.querySelectorAll('.card');
    playGameButtonElem.addEventListener('click', () => startGame());
}

function startGame() {

    initializeNewGame();
    startRound();
}

function initializeNewGame() {

}

function startRound() {
    initializeNewRound();
    collectCards();
    flipCards(true);
    shuffleCards();
}

function initializeNewRound() {

}

function collectCards() {
    transformGridArea(collapsedGridAreaTemplate);
    addCardsToGridAreaCell(cardCollectionCellClass);

}

function transformGridArea(areas) {
    cardContainerElem.style.gridTemplateAreas = areas;
}

function addCardsToGridAreaCell(cellPositionClassName) {
    const cellPositionElem = document.querySelector(cellPositionClassName);

    cards.forEach((card, index) => {
        addChildElement(cellPositionElem, card);
    });


}

function flipCard(card, flipToBack) {
    const innerCardElem = card.firstChild;
    if (flipToBack && !innerCardElem.classList.contains('flip-it')) {
        innerCardElem.classList.add('flip-it');
    } else if (innerCardElem.classList.contains('flip-it')) {
        innerCardElem.classList.remove('flip-it');
    }
}



function flipCards(flipToBack) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            flipCard(card, flipToBack);
        }, index * 100);
    });
}

function shuffleCards() {
    const id = setInterval(shuffle, 12);
    let shuffleCount = 0;

    function shuffle() {

        randomizeCardPositions();

        if (shuffleCount == 500) {
            clearInterval(id);
            dealCards();
        } else {
            shuffleCount++;
        }
    }

}

function createCards() {
    cardObjectDefined.forEach((cardItem) => {
        createCard(cardItem);
    });
}

function randomizeCardPositions() {
    const random1 = Math.floor(Math.random() * numCards) + 1;
    const random2 = Math.floor(Math.random() * numCards) + 1;

    const temp = cardPositions[random1 = 1];
    cardPositions[random1 - 1] = cardPositions[random2 - 1];
    cardPositions[random2 - 1] = temp;

}

function dealCards() {
    addCardsToAppropriateCell();
    const areasTemplate = returnGridAreasMappedToCardPos();
    transformGridArea(areasTemplate);
}

function returnGridAreasMappedToCardPos(){
    let firstPart = "";
    let secondPart = "";
    let areas = "";

    cards.forEach((card, index) => {
        if(cardPositions[index] == 1)
        {
            areas = areas + "a ";
        }
        else if(cardPositions[index] == 2)
        {
            areas = areas + "b ";
        }
        else if (cardPositions[index] == 3)
        {
            areas = areas + "c ";
        }
        else if (cardPositions[index] == 4)
        {
            areas = areas + "d ";
        }
        if (index == 1)
        {
            firstPart = areas.substring(0, areas.length - 1);
            areas = "";
        }
        else if (index == 3)
        {
            secondPart = areas.substring(0, areas.length - 1);
        }

    });

    return `"${firstPart}" "${secondPart}"`;


}



function addCardsToAppropriateCell() {
    cards.forEach((card) => {
        addCardToGridCell(card);
    });
}

function createCard(cardItem) {

    //Div Elements that make up a card 
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    //create front and back image elements for cards 
    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    //add class and id to card element
    addClassToElement(cardElem, 'card');
    addIdToElement(cardElem, cardItem.id);

    //add class to inner card element 
    addClassToElement(cardInnerElem, 'card-inner');

    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front');

    //add class to front card element
    addClassToElement(cardBackElem, 'card-back');

    //add src attribute and appropriate vlaues to img element of back of card 
    addSrcToImageElem(cardBackImg, cardBackImgPath);

    //add src attribute and appropriate vlaues to img element of front of card 
    addSrcToImageElem(cardFrontImg, cardItem.imagePath);

    //assign class to back Image element *bug fixed
    addClassToElement(cardBackImg, 'card-img');

    //assign class to front Image element *bug fixed
    addClassToElement(cardFrontImg, 'card-img');

    //add front element as child  element to front card element 
    addChildElement(cardFrontElem, cardFrontImg);

    //add back element as child  element to back card element 
    addChildElement(cardBackElem, cardBackImg);

    //add front element as child  element to front inner element 
    addChildElement(cardInnerElem, cardFrontElem);

    //add back element as child  element to back inner element 
    addChildElement(cardInnerElem, cardBackElem);

    //add inner card element as child element to card element 
    addChildElement(cardElem, cardInnerElem);

    //add card element as child element to appropriate grid cell
    addCardToGridCell(cardElem);

    initializeCardPositions(cardElem);
}

function initializeCardPositions(card) {
    cardPositions.push(card.id);
}

function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className);
}

function addIdToElement(elem, id) {
    elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
    imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem);
}


function addCardToGridCell(card) {
    const cardPositionClassName = mapCardIdToGridCell(card);
    const cardPosElem = document.querySelector(cardPositionClassName);

    addChildElement(cardPosElem, card);

}

function mapCardIdToGridCell(card) {
    if (card.id == 1) {
        return '.card-1';
    } else if (card.id == 2) {
        return '.card-2';
    } else if (card.id == 3) {
        return '.card-3';
    } else if (card.id == 4) {
        return '.card-4';
    }
}